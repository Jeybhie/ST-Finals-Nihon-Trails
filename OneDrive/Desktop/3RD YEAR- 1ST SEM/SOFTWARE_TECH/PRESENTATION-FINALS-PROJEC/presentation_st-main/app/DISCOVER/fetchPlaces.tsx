const fetchPlaces = async (
  lng: number,
  lat: number,
  placeCategories: string,
  language: string,
  proximitySearch: number,
  limitOfRequestedPlaces: number,
  searchTerm: string // Add a new parameter for searching/filtering
) => {
  const requestOptions = {  
    method: 'GET',
  };

  // Function to clean and normalize strings (for all languages)
  const cleanString = (str: string) => {
    return str
      .normalize('NFKC') // Normalize Unicode characters to a consistent form
      .replace(/\s+/g, ' ') // Collapse multiple spaces into one
      .trim(); // Trim leading and trailing spaces
  };

  try {
    // Construct the API URL
    const apiUrl = `https://api.geoapify.com/v2/places?categories=${placeCategories}&filter=circle:${lng},${lat},${proximitySearch}&bias=proximity:${lng},${lat}&limit=${limitOfRequestedPlaces}&lang=${language}&apiKey=c2f9e314313147fb973f918570b0bf3b`;

    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      console.log('Failed to fetch data');
      return { error: 'Failed to fetch data' };
    }

    const result = await response.json();
    console.log('Successfully fetched data', result, "long: ", lng, "lat: ", lat);

    if (result.features && result.features.length > 0) {
      // Clean the search term
      const cleanSearchTerm = cleanString(searchTerm.toLowerCase());

      // Filter results
      const filteredData = await result.features.filter((feature: any) => {
        const rawName = feature.properties?.name || ""; // Default to empty if undefined
        const cleanName = cleanString(rawName.toLowerCase());

        // Debug logging
        console.log(`Raw name: "${rawName}", Clean name: "${cleanName}"`);
        console.log(`Search term: "${searchTerm}", Clean search term: "${cleanSearchTerm}"`);

        // Perform the filtering
        return cleanName.includes(cleanSearchTerm);
      });

      return { data: filteredData }; // Return filtered data
    } else {
      console.log("No places found in response.");
      return { data: [] };
    }
  } catch (error) {
    console.error('Error fetching places:', error);
    return { error: 'Error fetching places.' };
  }
};

export default fetchPlaces;
