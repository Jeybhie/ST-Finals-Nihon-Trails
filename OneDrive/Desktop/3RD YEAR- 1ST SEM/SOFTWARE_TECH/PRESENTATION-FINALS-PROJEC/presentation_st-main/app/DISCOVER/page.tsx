"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import Style from "./discoverPage.module.css";
import Style2 from "./fetchImagesStyle.module.css";
import MyMap from "./geoapifyMap";
import fetchPlaces from "./fetchPlaces";
import FetchImages from "./fetchImages";
import DiscoverPageScript from "./discoverPageScript";
import { closeModal } from "./discoverPageScript";
import { CloseExpandedSection } from "./discoverPageScript";
import Content from "../CONTENT/Content";
import Readmore from "./readMore";

const DiscoverPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({
    lng: 0,
    lat: 0,
  });
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [requestImageBool, setRequestImageBool] = useState<boolean>(true);
  const [placeCategories, setPlaceCategories] = useState<string>("tourism");
  const [modalIsOn, setModalisOn] = useState<boolean>(false);
  const [fetchedName, setFetchedName] = useState<string>("none");
  const [displayMode, setDisplayMode] = useState<string>("scroll");

  const language = "en";
  const proximitySearch = 30000;
  const limitOfRequestedPlaces = 30;
  let placeIndex = 1;

  const handleCenterChange = (lng: number, lat: number) => {
    setCoordinates({ lng, lat });
    console.log(`Updated Coordinates - Longitude: ${lng}, Latitude: ${lat}`);
    console.log(placeCategories);
    getPlaces(lng, lat);
  };

  const handleImageData = (data: any) => {
    if (data === false) {
      console.log("modal should be off");
      setModalisOn(false);
      setDisplayMode("scroll");
    } else {
      setFetchedName(data);
      console.log("Image data received:" + fetchedName);
      setModalisOn(true);
      console.log("modal should be on");
      setDisplayMode("hidden");
    }
  };

  const getPlaces = async (lng: number, lat: number) => {
    const searchTerm = (document.getElementById("searchTerm") as HTMLInputElement)
      .value;
    setLoading(true);
    const { data, error } = await fetchPlaces(
      lng,
      lat,
      placeCategories,
      language,
      proximitySearch,
      limitOfRequestedPlaces,
      searchTerm
    );
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setPlaces(data || []);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = displayMode;
  }, [displayMode]);

  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <DiscoverPageScript />
      <section className={Style2.expandedResultsContainer} id="expandedResultsContainer">
        <section className={Style2.expandedResultsSubContainer}>
          <h2>{placeName}</h2>
          <button
            className={Style2.CloseButtonExpandedSection}
            id="CloseButtonExpandedSection"
            onClick={CloseExpandedSection}
          >
            Close
          </button>
        </section>
        <h2 className={Style.placesName}></h2>
      </section>

      <section className={Style2.modalMainContainer} id="confirmationModalMainContainer">
        <div className={Style2.modalSucccessful} id="confirmationModal">
          <p>Successfully liked this place!</p>
          <button
            id="closeButton"
            className={Style2.closeButton}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </section>

      {modalIsOn && (
        <Readmore placeName={fetchedName} sendData={handleImageData} />
      )}

      <NavBar />
      <div className={Style.mainContainer}>
        <section className={Style.contentContainer}>
          <div className={Style.mapContainer}>
            <MyMap onCenterChange={handleCenterChange} />
            <div className={Style.detectionContainer}>
              <img src="/ICONS/ICON-PINPOINT.svg" />
              <span className={Style.detectionLines}></span>
              <span className={Style.detectionLines}></span>
            </div>
          </div>
          <div className={Style.detailsContainer}>
            <div className={Style.searchBarContainer}>
              <img
                src="/ICONS/ICON-SEARCH.png"
                className={Style.searchIconImage}
              />
              <input
                type="search"
                placeholder="search"
                className={Style.searchBar}
                id="searchTerm"
              />
              <img src="/ICONS/ICON-FILTER.png" className={Style.iconFilter} />
            </div>
            <section className={Style.categoryContainer}>
              <div
                className={Style.categoryButtons}
                id="cameraIcon"
                onClick={() => setPlaceCategories("tourism")}
              >
                <img src="/ICONS/ICON-CAMERA.png" />
                <p>Must See</p>
              </div>
              <div
                className={Style.categoryButtons}
                id="mountainIcon"
                onClick={() => setPlaceCategories("natural.mountain")}
              >
                <img src="/ICONS/ICON-MOUNTAIN.png" />
                <p>Mountains</p>
              </div>
              <div
                className={Style.categoryButtons}
                id="shrineIcon"
                onClick={() =>
                  setPlaceCategories("religion.place_of_worship.shinto")
                }
              >
                <img src="/ICONS/ICON-SHRINES.png" />
                <p>Shrines</p>
              </div>
            </section>
            <section className={Style.categoryContainer2}>
              <div
                className={Style.categoryButtons}
                id="hotelIcon"
                onClick={() => setPlaceCategories("accommodation")}
              >
                <img src="/ICONS/ICON-HOTEL.png" />
                <p>Hotels</p>
              </div>
              <div
                className={Style.categoryButtons}
                id="naturalParkIcon"
                onClick={() => setPlaceCategories("natural")}
              >
                <img src="/ICONS/ICON-NATURAL-PARK.png" />
                <p>Natural Parks</p>
              </div>
              <div
                className={Style.categoryButtons}
                id="transportIcon"
                onClick={() => setPlaceCategories("public_transport")}
              >
                <img src="/ICONS/ICON-TRANSPORTATION.png" />
                <p>Transport</p>
              </div>
            </section>

            <section className={Style.resultsContainer}>
              {loading ? (
                <section className={Style.loadingContainerFetchingPlaces}>
                  <div>loading...</div>
                  <div className={Style.progressBarContainer}>
                    <div className={Style.progressBar}></div>
                  </div>
                </section>
              ) : (
                <section className={Style2.resultsSectionContainer}>
                  {places.map((place, index) =>
                    place.properties.name ? (
                      <div className={Style2.resultsImagesContainer} key={index}>
                        <p className={Style.placesName}>
                          {placeIndex++}. {place.properties.address_line1}
                        </p>
                        <div>
                          <FetchImages
                            placeName={place.properties.name}
                            isImageRequested={requestImageBool}
                            placeNameEnglish={place.properties.address_line1}
                            onSendData={handleImageData}
                          />
                        </div>
                      </div>
                    ) : null
                  )}
                </section>
              )}
            </section>
          </div>
        </section>
      </div>
      <Content />
    </main>
  );
};

export default DiscoverPage;
