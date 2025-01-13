"use client";
import React, { useEffect } from 'react'; 
import style from './landingstyle.module.css';

export default function landingjavascipt() {
    useEffect(() => {
        var currentIndex = 0;
        const prevbutton = document.getElementById('prev');
        const nextbutton = document.getElementById('next');
        const carouselimg1 = document.getElementById('carouselimg1');
        const carouselimg2 = document.getElementById('carouselimg2');
        const carouselimg3 = document.getElementById('carouselimg3');
        const carouselimg4 = document.getElementById('carouselimg4');

        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');
        const image4 = document.getElementById('image4');
        
        const header1 = document.getElementById('header1');
        const header2 = document.getElementById('header2');
        const header3 = document.getElementById('header3');
        const header4 = document.getElementById('header4');

            header1.classList.add(style.header1Display);
        
        prevbutton.onclick = function () {
        currentIndex--;
           checkIndex();
      
        }
        nextbutton.onclick = function () {
            currentIndex++;
            checkIndex();
        }
        function checkIndex() {
              if (currentIndex == 1) {
                carouselimg1.style.border = '2px solid white';
                carouselimg2.style.border = 'none';
                carouselimg3.style.border = 'none';
                carouselimg4.style.border = 'none';
                image1.classList.add(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
                image4.classList.remove(style.image4Display);

            header1.classList.add(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.remove(style.header4Display);
            }
            else if (currentIndex == 2) {
                carouselimg1.style.border = 'none';
                carouselimg2.style.border = '2px solid white';
                carouselimg3.style.border = 'none';
                carouselimg4.style.border = 'none';
                image1.classList.remove(style.image1Display);
                image2.classList.add(style.image2Display);
                image3.classList.remove(style.image3Display);
                image4.classList.remove(style.image4Display);

            header1.classList.remove(style.header1Display);
            header2.classList.add(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.remove(style.header4Display);
            }
            else if (currentIndex == 3) {
                carouselimg1.style.border = 'none';
                carouselimg2.style.border = 'none';
                carouselimg3.style.border = '2px solid white';
                carouselimg4.style.border = 'none';
                image1.classList.remove(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.add(style.image3Display);
                image4.classList.remove(style.image4Display);

            header1.classList.remove(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.add(style.header3Display);
            header4.classList.remove(style.header4Display);
            }
            else if (currentIndex == 4) {
                carouselimg1.style.border = 'none';
                carouselimg2.style.border = 'none';
                carouselimg3.style.border = 'none';
                carouselimg4.style.border = '2px solid white';
                image1.classList.remove(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
                image4.classList.add(style.image4Display);

            header1.classList.remove(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.add(style.header4Display);
            } else if (currentIndex > 4) {
                currentIndex = 1;
                carouselimg1.style.border = '2px solid white';
                carouselimg2.style.border = 'none';
                carouselimg3.style.border = 'none';
                carouselimg4.style.border = 'none';
                image1.classList.add(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
                image4.classList.remove(style.image4Display);

            header1.classList.add(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.remove(style.header4Display);
            }
            else if (currentIndex < 0) {
                currentIndex = 4;
                carouselimg1.style.border = 'none';
                carouselimg2.style.border = 'none';
                carouselimg3.style.border = 'none';
                carouselimg4.style.border = '2px solid white';
                image1.classList.remove(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
                image4.classList.add(style.image4Display);
            }
        }
        carouselimg1.onclick = function () {
            carouselimg1.style.border = '2px solid white';
            carouselimg2.style.border = 'none';
            carouselimg3.style.border = 'none';
            carouselimg4.style.border = 'none';
              image1.classList.add(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
            image4.classList.remove(style.image4Display);

            header1.classList.add(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.remove(style.header4Display);
        }
          carouselimg2.onclick = function () {
            carouselimg1.style.border = 'none';
            carouselimg2.style.border = '2px solid white';
            carouselimg3.style.border = 'none';
              carouselimg4.style.border = 'none';
                image1.classList.remove(style.image1Display);
                image2.classList.add(style.image2Display);
                image3.classList.remove(style.image3Display);
              image4.classList.remove(style.image4Display);
              
                 header1.classList.remove(style.header1Display);
            header2.classList.add(style.header2Display);
            header3.classList.remove(style.header3Display);
            header4.classList.remove(style.header4Display);
        }
          carouselimg3.onclick = function () {
            carouselimg1.style.border = 'none';
            carouselimg2.style.border = 'none';
            carouselimg3.style.border = '2px solid white';
              carouselimg4.style.border = 'none';
                image1.classList.remove(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.add(style.image3Display);
              image4.classList.remove(style.image4Display);
              
            header1.classList.remove(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.add(style.header3Display);
            header4.classList.remove(style.header4Display);
        }
          carouselimg4.onclick = function () {
            carouselimg1.style.border = 'none';
            carouselimg2.style.border = 'none';
            carouselimg3.style.border = 'none';
              carouselimg4.style.border = '2px solid white';
                image1.classList.remove(style.image1Display);
                image2.classList.remove(style.image2Display);
                image3.classList.remove(style.image3Display);
              image4.classList.add(style.image4Display);
            
            header1.classList.remove(style.header1Display);
            header2.classList.remove(style.header2Display);
            header3.classList.remove(style.header3Display);
              header4.classList.add(style.header4Display);
              
        }

        //-----------------------------animations-------------------//
             const elements = document.getElementById('element1')
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    elements.classList.add(style.regionsOfJapanContainerShow);
                } else {
                    elements.classList.remove(style.regionsOfJapanContainerShow);
                }
            }, {
                threshold: 1,
            });
        });
        observer1.observe(elements);


       const show1 = document.getElementById('show1')
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show1.classList.add(style.show1Display);
                } else {
                    show1.classList.remove(style.show1Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer2.observe(show1);

        const show2 = document.getElementById('show2')
        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show2.classList.add(style.show2Display);
                } else {
                    show2.classList.remove(style.show2Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer3.observe(show2);

         const show3 = document.getElementById('show3')
        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show3.classList.add(style.show3Display);
                } else {
                    show3.classList.remove(style.show3Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer4.observe(show3);

             const show4 = document.getElementById('show4')
        const observer5 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show4.classList.add(style.show4Display);
                } else {
                    show4.classList.remove(style.show4Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer5.observe(show4);

       
             const show5 = document.getElementById('show5')
        const observer6 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show5.classList.add(style.show5Display);
                } else {
                    show5.classList.remove(style.show5Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer6.observe(show5);

       
             const show6 = document.getElementById('show6')
        const observer7 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    show6.classList.add(style.show6Display);
                } else {
                    show6.classList.remove(style.show6Display);
                }
            }, {
                threshold: 1,
            });
        });
        observer7.observe(show6);

       
       
       


    })
    return (
        <div></div>
    );
}