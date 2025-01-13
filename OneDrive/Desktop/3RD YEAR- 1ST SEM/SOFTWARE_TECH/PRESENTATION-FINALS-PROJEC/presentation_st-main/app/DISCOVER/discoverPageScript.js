"use client";
import React, { useEffect } from 'react'; 
import Style from './discoverPage.module.css';

export default function discoverPageScript() {
    useEffect(() => {

        

        const cameraIcon = document.getElementById('cameraIcon');
        const mountainIcon = document.getElementById('mountainIcon');
        const shrineIcon = document.getElementById('shrineIcon');
        const hotelIcon = document.getElementById('hotelIcon');
        const naturalParkIcon = document.getElementById('naturalParkIcon'); 
        const transportIcon = document.getElementById('transportIcon');
    



        var cameraClicked = false; 
        var mountainClicked = false; 
        var shrineClicked = false; 
        var hotelClicked = false; 
        var naturalParkClicked = false; 
        var transportClicked = false; 
        



        cameraIcon.onclick = function () {
            cameraClicked = !cameraClicked;
            if (cameraClicked) {
                cameraIcon.classList.add(Style.cameraIconClicked);
                mountainIcon.classList.remove(Style.mountainIconClicked);
                shrineIcon.classList.remove(Style.shrineIconClicked);
                hotelIcon.classList.remove(Style.hotelIconClicked);
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
                transportIcon.classList.remove(Style.transportIconClicked);
            } else {
                cameraIcon.classList.remove(Style.cameraIconClicked);
            }
        };

            mountainIcon.onclick = function () {
            mountainClicked = !mountainClicked;
            if (mountainClicked) {
                mountainIcon.classList.add(Style.mountainIconClicked);
                cameraIcon.classList.remove(Style.cameraIconClicked);
                shrineIcon.classList.remove(Style.shrineIconClicked);
                hotelIcon.classList.remove(Style.hotelIconClicked);
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
                transportIcon.classList.remove(Style.transportIconClicked);
            } else {
                mountainIcon.classList.remove(Style.mountainIconClicked);
            }
        };

            shrineIcon.onclick = function () {
            shrineClicked = !shrineClicked;
            if (shrineClicked) {
                cameraIcon.classList.remove(Style.cameraIconClicked);
                mountainIcon.classList.remove(Style.mountainIconClicked);
                shrineIcon.classList.add(Style.shrineIconClicked);
                hotelIcon.classList.remove(Style.hotelIconClicked);
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
                transportIcon.classList.remove(Style.transportIconClicked);
            } else {
                shrineIcon.classList.remove(Style.shrineIconClicked);
            }
        };

            hotelIcon.onclick = function () {
            hotelClicked = !hotelClicked;
            if (hotelClicked) {
                cameraIcon.classList.remove(Style.cameraIconClicked);
                mountainIcon.classList.remove(Style.mountainIconClicked);
                shrineIcon.classList.remove(Style.shrineIconClicked);
                hotelIcon.classList.add(Style.hotelIconClicked);
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
                transportIcon.classList.remove(Style.transportIconClicked);
            } else {
                hotelIcon.classList.remove(Style.hotelIconClicked);
            }
        };

            naturalParkIcon.onclick = function () {
            naturalParkClicked = !naturalParkClicked;
            if (naturalParkClicked) {
                cameraIcon.classList.remove(Style.cameraIconClicked);
                mountainIcon.classList.remove(Style.mountainIconClicked);
                shrineIcon.classList.remove(Style.shrineIconClicked);
                hotelIcon.classList.remove(Style.hotelIconClicked);
                naturalParkIcon.classList.add(Style.naturalParkIconClicked);
                transportIcon.classList.remove(Style.transportIconClicked);
            } else {
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
            }
        };

            transportIcon.onclick = function () {
            transportClicked = ! transportClicked;
            if ( transportClicked) {
                cameraIcon.classList.remove(Style.cameraIconClicked);
                mountainIcon.classList.remove(Style.mountainIconClicked);
                shrineIcon.classList.remove(Style.shrineIconClicked);
                hotelIcon.classList.remove(Style.hotelIconClicked);
                naturalParkIcon.classList.remove(Style.naturalParkIconClicked);
                transportIcon.classList.add(Style.transportIconClicked);
            } else {
                transportIcon.classList.remove(Style.transportIconClicked);
            }
        };

    })


  
    
    return (
        <div></div>
  );

        }
        export const showModal = () => {
        const confirmationModalMainContainer = document.getElementById('confirmationModalMainContainer');
        confirmationModalMainContainer.style.display = 'flex';
        }
        export const closeModal = ()=> {
        confirmationModalMainContainer.style.display = 'none';
        }

        export const CloseExpandedSection =()=> {
          const expandedResultsContainer = document.getElementById('expandedResultsContainer');
             expandedResultsContainer.style.display = 'none';
        }
           export const openReadmoreSection =()=> {
          const expandedResultsContainer = document.getElementById('expandedResultsContainer');
             expandedResultsContainer.style.display = 'flex';
        }