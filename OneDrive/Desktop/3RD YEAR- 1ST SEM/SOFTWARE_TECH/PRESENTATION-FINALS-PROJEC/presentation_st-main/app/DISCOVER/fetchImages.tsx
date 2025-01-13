import React, { useState } from "react";
import Style from "./discoverPage.module.css";
import Style2 from "./fetchImagesStyle.module.css";
import DiscoverPageScript from "./discoverPageScript";
import { showModal } from "./discoverPageScript";
import Middleware from "./middleware";

interface FetchImagesProps {
  placeName: string;
  placeNameEnglish: string;
  isImageRequested: boolean;
  onSendData: (data: string) => void; // Add onSendData to the props
}

const FetchImages: React.FC<FetchImagesProps> = ({
  placeName,
  placeNameEnglish,
  isImageRequested,
  onSendData,
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>(["ICONS/ICON-IMAGE.png"]);
  const [addedToBucketlist, setBucketlist] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null); // To track the selected place for ReadMore
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReadMore = () => {
    setSelectedPlace(placeName); // Set the selected place name
    onSendData(placeName); // Send data to the parent using the callback
  };

  const fetchImage = async () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `https://google.serper.dev/images?q=${encodeURIComponent(placeName)}&apiKey=a0d7e8830f060ac862c5bd538dc0da8be5a205ac`,
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

  return (
    <div className={Style2.resultsContainer}>
      <DiscoverPageScript />
      {selectedPlace ? <Middleware placeName={selectedPlace} /> : null}
      {placeName.length > 0 ? (
        <div className={Style2.resultSubContainer}>
          <div className={Style.carouselContainer}>
            <button className={Style.prevButton} onClick={prevImage}>
              &#10094;
            </button>

            {loading ? (
              <section className={Style.loadingContainer}>
                <div>Loading...</div>
                <div className={Style.progressBarContainer}>
                  <div className={Style.progressBar}></div>
                </div>
              </section>
            ) : (
              <section className={Style.sectionImageContainer}>
                <div className={Style.imageContainer} onClick={fetchImage}>
                  <img
                    src={imageUrls[currentIndex]}
                    alt={`Fetched ${currentIndex + 1}`}
                    className={Style.carouselImage}
                  />
                </div>
              </section>
            )}

            <button className={Style.nextButton} onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      ) : null}

      <div className={Style2.seeMoreContainer}>
     
        <button className={Style2.addToBucketlistButton} id="addedToBucketlistButton"
          onClick={showModal}>
          <img className={Style2.buttonIcons} src="ICONS/ICON-PINPOINT.svg"/>
       Like 
        </button>
        <button
          className={Style2.addToBucketlistButton}
          id="readMoreButton"
          onClick={handleReadMore}
        >
          <img className={Style2.buttonIcons} src="ICONS/ICON-SEE-MORE.svg" />
          Read More
        </button>
      </div>
    </div>
  );
};

export default FetchImages;
