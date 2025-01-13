"use client";
import React, { useEffect, useRef, useState } from 'react';
import maplibre from 'maplibre-gl';
import style from './discoverPage.module.css';
import { setDefaultAutoSelectFamily } from 'net';

// Define the props interface for GeoapifyMap
interface GeoapifyMapProps {
  onCenterChange: (lng: number, lat: number) => void; // Prop to pass coordinates back to the parent
}

const GeoapifyMap: React.FC<GeoapifyMapProps> = ({ onCenterChange }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<maplibre.Map | null>(null); // State to hold the map instance

  useEffect(() => {
    const myAPIKey = 'c2f9e314313147fb973f918570b0bf3b'; 
    const initialState = {
      lng: 138.232808,
      lat: 36.660009,
      zoom: 5.5
    };

    const map = new maplibre.Map({
      container: mapContainerRef.current!,
      style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    setMap(map); // Set the map instance in states

    // Cleanup function to remove the map instance on unmount
    return () => {
      map.remove();
    };
  }, [mapContainerRef]);

  // Function to get the current center of the map
  const handleGetCenter = () => {
    if (map) {
      const { lng, lat } = map.getCenter(); // Get current center
      onCenterChange(lng, lat); // Pass the coordinates back to the parent
      console.log(`Longitude: ${lng}, Latitude: ${lat}`); // Log to console
    }
  };

  return (
    <div className={style.apiMapContainer}>
      <div className={style.map} id="map-container" ref={mapContainerRef} />
      <button onClick={handleGetCenter} className={style.button}>View Places</button>
    
   
    </div>
  );
};

export default GeoapifyMap;
