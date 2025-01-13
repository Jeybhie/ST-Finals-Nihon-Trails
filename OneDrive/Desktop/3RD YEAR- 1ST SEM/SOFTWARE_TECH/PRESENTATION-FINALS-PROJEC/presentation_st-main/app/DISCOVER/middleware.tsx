import React, { useEffect, useState } from 'react'
import ReadMore from './readMore';


interface middleWare {
  placeName: string; // Accept placeName as a prop
}
const middleWare: React.FC<middleWare> = ({ placeName }) => {
    const [currentPlaceName, setCurrentPlaceName] = useState<string | null>(placeName);
    const [selectedPlace, setSelectedPlace] = useState<string  | null>(null); 
    var newPlaceName = placeName;
    useEffect(() => {
        // setSelectedPlace(newPlaceName);
        // console.log("new place Name: " + placeName);
    });

  return (
      <>
      </>
  )
}

export default middleWare
