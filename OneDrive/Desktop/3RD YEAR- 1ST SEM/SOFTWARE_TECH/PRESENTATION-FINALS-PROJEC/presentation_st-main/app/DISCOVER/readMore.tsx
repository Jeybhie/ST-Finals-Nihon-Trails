import React, { useState, useEffect } from 'react';
import style from './readMore.module.css';
import Script from './discoverPageScript'
interface ReadMoreProps {
  placeName: string; // Accept placeName as a prop
  sendData: (data: boolean) => void;
}

const ReadMore: React.FC<ReadMoreProps> = ({ placeName,sendData }) => {
  const [currentPlaceName, setCurrentPlaceName] = useState<string | null>(placeName);
  const [imageUrls, setImageUrls] = useState<string[]>(["ICONS/ICON-IMAGE.png"]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [organicSnippet, setOrganicSnippet] = useState<string | null>(null);
  const [organicSnippet2, setOrganicSnippet2] = useState<string | null>(null);
  const [organicSnippet3, setOrganicSnippet3] = useState<string | null>(null);
  const [organicSnippet4, setOrganicSnippet4] = useState<string | null>(null);

  const [knowledgeGraph, setKnowledgeGraph] = useState<any | null>(null);
  const [placeType, setPlaceType] = useState<string | null>(null);
  const [placeAddress, setPlaceAddress] = useState<string | null>(null);
  const [rating, setRating] = useState<string | null>(null);  
  const [ratingCount, setRatingCount] = useState<string | null>(null);
  const [openingHours, setOpeningHours] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);

  const [modalOff, setModalOff] = useState<boolean>(false);

  const offModal = ()=>{
    setModalOff(false);
    sendData(modalOff);
  }

  var imageToBeFetched = placeName;
  const fetchSearchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `https://google.serper.dev/search?q=${encodeURIComponent(imageToBeFetched)}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
        requestOptions
      );
      const data = await response.json();

      // Extract organic snippet
      const snippet = data?.organic?.[0]?.snippet || "No Information found.";
      setOrganicSnippet(snippet);
      const snippet2 = data?.organic?.[1]?.snippet || "No Information found.";
      setOrganicSnippet2(snippet2);
       const snippet3 = data?.organic?.[2]?.snippet || "No Information found.";
      setOrganicSnippet3(snippet3);
      const snippet4 = data?.organic?.[3]?.snippet || "No Information found.";
      setOrganicSnippet4(snippet4);

      const type = data?.knowledgeGraph.type || "No data available";
      setPlaceType(type);
      const placeAddress = data?.knowledgeGraph.attributes.Address || "No Address found";
      setPlaceAddress(placeAddress);  
      const rating = data?.knowledgeGraph.rating || null;
      setRating(rating);
      const ratingCount = data?.knowledgeGraph.ratingCount || null;
      setRatingCount(ratingCount);
      const openingHours = data?.knowledgeGraph.attributes.Hours || null;
      setOpeningHours(openingHours);
      const phone = data?.knowledgeGraph.attributes.Phone || null;
      setPhone(phone);
      const website = data?.knowledgeGraph.website || null;
      setWebsite(website);

  

      // Extract knowledge graph data
      const knowledge = data?.knowledgeGraph || null;
      setKnowledgeGraph(knowledge);
    } catch (error) {
      console.error("Error fetching search data:", error);
      setOrganicSnippet("no description available.");
      setKnowledgeGraph(null);
    }
  };

  const fetchImage = async () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `https://google.serper.dev/images?q=${encodeURIComponent(imageToBeFetched)}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
        requestOptions
      );
      const data = await response.json();
      const images = data.images || [];

      if (images.length > 0) {
        setImageUrls(images.slice(0, 5).map((img: any) => img.imageUrl));
      } else {
        console.log("No images found.");
        setImageUrls(["ERROR-MESSAGES/ERROR-NO-IMAGES-FOUND.png"]);
      }
    } catch (error) {
      setImageUrls(["ERROR-MESSAGES/ERROR-NO-IMAGES-FOUND.png"]);
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    // Update state whenever the placeName prop changes
    setCurrentPlaceName(placeName);
    fetchSearchData(); // Fetch search data when placeName changes
    fetchImage(); // Fetch images based on placeName
  }, [placeName]);

  return (
    <div>
      <Script/>
      <div className={style.readMoreBody}>
        <div className={style.modalBody}>
          <div className={style.closeRow}>
            <button className={style.closeButton} id="closeButton" onClick={()=> sendData(false)}>X</button>
          </div>
      

            <div className={style.carouselContainer}>
            <button className={style.prevButton} onClick={prevImage}>
              &#10094;
            </button>

            {loading ? (
              <section className={style.loadingContainer}>
                <div>loading...</div>
                <div className={style.progressBarContainer}>
                  <div className={style.progressBar}></div>
                </div>
              </section>
            ) : (
              <>
                <section className={style.sectionImageContainer}>
                  <div className={style.imageContainer}>
                    <img
                      src={imageUrls[currentIndex]}
                      alt={`Fetched ${currentIndex + 1}`}
                      className={style.carouselImage}
                    />
                  </div>
                </section>
              </>
            )}

            <button className={style.nextButton} onClick={nextImage}>
              &#10095;
            </button>
            </div>
          <div className={style.fetchedData}>       
            <p className={style.title}>{currentPlaceName}</p> 

            <div className={style.addressRow}>{ placeAddress? ( <p className={style.address}>&#127759;   {placeAddress}</p>) : (<></>)}</div>
      {knowledgeGraph?( <>
            <div className={style.ratingsRow}>
              {rating ? (<>  <p className={style.address}>&#x1F31F; Ratings: {rating}</p>  <p className={style.address}>&#x1F31F; Rating Counts: {ratingCount}</p></>
              ) : (<></>)}
            </div>
            {openingHours ? (<p className={style.address}> &#128336; Opening Hours:  {openingHours}</p>) : (<></>)}
            {phone ? (<p className={style.address}>  &#x1F4DE; Contact:  {phone}</p>):(<></>)}
            {website ? (<p className={style.address}>  &#128187; Website:  {website}</p>) : (<></>)}
            </>) : (<>
                <p>No Booking location information available...</p>
            </>)
            }
            <div className={style.Spacer}>Information:</div>
            <p>&#x1F4CD; {placeType || "No place description..."}</p>

            <div className={style.Spacer}>Additional Information:</div>
            <p>&#x1F4CD; {organicSnippet || "Loading place description..."}</p>
            <p>&#x1F4CD; {organicSnippet2 || "Loading place description..."}</p>
            <p>&#x1F4CD;{organicSnippet3 || "Loading place description..."}</p>
              <p>&#x1F4CD; {organicSnippet4 || "Loading place description..."}</p>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
