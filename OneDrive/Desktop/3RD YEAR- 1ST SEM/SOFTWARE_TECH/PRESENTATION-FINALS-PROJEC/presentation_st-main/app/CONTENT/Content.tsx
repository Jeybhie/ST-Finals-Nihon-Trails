
import React, { useState } from "react";
import style from './content.module.css';
import Footer from '../footer';
import Javascript from './contentJavascript';

const Content = () => {
  const [japanMapset1, setjapanMapset1] = useState<string[]>(["/CONTENT/MAP-kyushu.png", "/CONTENT/MAP-Shikoku.png", "/CONTENT/MAP-Chugoku.png",
    "/CONTENT/MAP-Kansai.png", "/CONTENT/MAP-Chubu.png", "/CONTENT/MAP-Kanto.png", "/CONTENT/MAP-Tohoku.png", "/CONTENT/MAP-Hokkaido.png"
  ]);
  const [regionName, setRegionName] = useState<string[]>(["Kyushu", "Shikoku", "Chugoku", "Kansai", "Chubu", "Kanto", "Tohoku", "Hokkaido"]);
  var [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < japanMapset1.length - 1 && regionName.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={style.ContentMainContainer}>
      <section className={style.headerContainer}>
        <section className={style.regionsOfJapanContainer} id="element1">
                  <h4>Regions of Japan</h4>
        </section>
      </section>
      <Javascript />

      
        <div className={style.modalOutsideBody} id="modalBody1">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton1">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-DAZAIFU-TENMANGU.webp" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>Kawachi Wisteria</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
      </div>
      
           <div className={style.modalOutsideBody} id="modalBody2">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton2">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-KUMAMOTO-CASTLE.webp" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>Kyushu Kumamoto Forest</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
      </div>
      
            <div className={style.modalOutsideBody} id="modalBody3">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton3">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-SHURIJO-CASTLE.jpg" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>SHURIJO SPRINGS</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
      </div>
      
             <div className={style.modalOutsideBody} id="modalBody4">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton4">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-TAKACHIHO-GORGE.jpg" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>HIROSAKI CASTLE</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
        </div>

                 <div className={style.modalOutsideBody} id="modalBody5">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton5">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-YONOHA-MAEHAMA-BEACH.jpg" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>HIRAIZUMI SHRINE</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
      </div>
      
        <div className={style.modalOutsideBody} id="modalBody6">
        <div className={style.modalBody}>
          <div className={style.modalRowExit}>
            <button className={style.exitButton} id="modalExitButton6">X</button>
          </div>
              <div className={style.modalImage}>
              <img src="/TOURISM/TOURISM-KYUSHU-BEPPU-JIGOKU.jpg" />
                 <div className={style.modalContent}>
              <div className={style.modalTitle}><p>MIYAJIMA SHRINES</p></div>
              <p>&#127759; Wooded Hills South of Central Kitakyushu</p>
              <div className={style.modaRlow}>
                <p>&#x1F31F; Rating: 4</p>
                <p>&#x1F31F; Ratings Count: 14</p>
              </div>
                  <p>&#x1F4DE; Contact: +81 288-51-0026</p>
                <p>Information: </p>
                <p>
                  Kawachi Wisteria Garden (河内藤園, Kawachi Fujien) is a private garden in the wooded hills<br/>
                  south of central Kitakyushu, famous for its spectacular displays of wisteria flowers. The garden<br/>
                  is opened to the public seasonally during the wisteria season which usually peaks around late<br/>
                  April to early May and during the maple leaf season in autumn.
                </p>
              </div>
            </div>
          </div>
        </div>


      <div className={style.regionMapandPicturesContainer}>
        {/* <div className={style.regionsContainer}>
                    <div className={style.regionMapContainer}>
                        <p className={style.regionName}>Kyushu</p>
                        <img src="/CONTENT/MAP-kyushu.png"/>
                    </div>
                    </div> */}
        <div className={style.carouselContainer} id="element2">
          <button className={style.prevButton} onClick={prevImage}>
            &#10094;
          </button>
          <section className={style.sectionImageContainer}>
            <div className={style.imageContainer}>
              <p className={style.regionNameHeader}>{regionName[currentIndex]}</p>
              <img src={japanMapset1[currentIndex]} />
            </div>
          </section>
          <button className={style.nextButton} onClick={nextImage} >
            &#10095;
          </button>
        </div>
                
        <div className={style.regionPicturesMainContainer}  id="elementPictureObserved">
          <section className={style.regionRowContainer}>
            <span className={style.pictureContainer}id="elementPicture1">
              <img src="/TOURISM/TOURISM-KYUSHU-DAZAIFU-TENMANGU.webp" />
              <h5>KAWACHI WISTERIA</h5>
            </span>
            <span className={style.pictureContainer} id="elementPicture2">
              <img src="/TOURISM/TOURISM-KYUSHU-KUMAMOTO-CASTLE.webp" />
              <h5>KUMAMOTO FOREST</h5>
            </span>
            <span className={style.pictureContainer} id="elementPicture3">
              <img src="/TOURISM/TOURISM-KYUSHU-SHURIJO-CASTLE.jpg" />
              <h5>SHURIJO SPRINGS</h5>
            </span>
          </section>
          <section className={style.detailsPlaceContainer}>
              <span className={style.details} id="details1">
              <p className={style.placeTitle}>Kyushu</p>
              <p className={style.subTitle}>| Fujinomiya</p>
                <button id="showModalButton1">
                  View
                </button>
            </span>
              <span className={style.details} id="details2">
              <p className={style.placeTitle}>Kansai</p>
               <p className={style.subTitle}>| Honmaru</p>
                <button id="showModalButton2">
                  View
                </button>
            </span>
              <span className={style.details} id="details3">
              <p className={style.placeTitle}>Chubu</p>
                <p className={style.subTitle}>|  Korankei</p>
                <button id="showModalButton3">
                  View
                </button>
              </span>
          </section>
          <section className={style.regionRowContainer}>
            <span className={style.pictureContainer} id="elementPicture4">
              <img src="/TOURISM/TOURISM-KYUSHU-TAKACHIHO-GORGE.jpg" />
              <h5>HIROSAKI CASTLE</h5>
            </span>
            <span className={style.pictureContainer} id="elementPicture5">
              <img src="/TOURISM/TOURISM-KYUSHU-YONOHA-MAEHAMA-BEACH.jpg" />
              <h5>HIRAIZUMI SHRINE</h5>
            </span>
            <span className={style.pictureContainer} id="elementPicture6">
              <img src="/TOURISM/TOURISM-KYUSHU-BEPPU-JIGOKU.jpg" />
              <h5>MIYAJIMA SHRINES</h5>
            </span>
          </section>
               <section className={style.detailsPlaceContainer}>
              <span className={style.details} id="details4">
              <p className={style.placeTitle}>Tohoku</p>
                <p className={style.subTitle}>|  Aomori</p>
                <button id="showModalButton4">
                  View
                </button>
            </span>
              <span className={style.details} id="details5">
              <p className={style.placeTitle}>Hokkaido</p>
               <p className={style.subTitle}>|  Iwate</p>
                <button id="showModalButton5">
                  View
                </button>
            </span>
              <span className={style.details} id="details6">
              <p className={style.placeTitle}>Chugoku</p>
              <p className={style.subTitle}>|  Mikasa</p>
                <button id="showModalButton6">
                  View
                </button>
              </span>
          </section>
        </div>
      </div>
            
      <div className={style.regionMapandPicturesContainer2} id="contentTobeObserved2">
        <h6 id="headerSlideIn">
          Find inspiration for your Japan vacation,from<br/>
          sightseeing in the city and cultural immersion in<br/>
          the countryside to top picks and suggested<br/>
          itineraries
        </h6>
        <span className={style.paragraph1before} id="paragraph1before"></span>
        <p className={style.paragraph1} id="paragraph1">
          Arrive in Japan with a game plan. Discover the many events and festivals,<br/>
          temples and castles, theme parks and hot springs, beaches and outdoor<br/>
          activities that Japan has to offer. Whether you're passionate about sports, an<br/>
          art lover, a nature enthusiast, a history buff, a foodie, or just looking to relax<br/>
          on a beach, the possibilities for your Japan journey are endless.
        </p>
        <section className={style.exploreImage1} id="exploreImage">
          <section className={style.exploreImageContainer}>
            <img src="/LANDINGPAGEASSETS/MT-FUJI.jpg" />
          </section>
        </section>
        <p className={style.paragraph2}>
          Explore by Interest
        </p>
        <div className={style.exploreContainer}>
          <div className={style.exploreRow}>
            <span className={style.exploreBox}>Japan Attractions</span>
            <span className={style.exploreBox}>Action & Adventure Japan</span>
            <span className={style.exploreBox}>Art & Design Japan</span>
            <span className={style.exploreBox}>Culture in Japan</span>
            <span className={style.exploreBox}>Food & Drink in Japan</span>
          </div>
          <div className={style.exploreRow}>
            <span className={style.exploreBox}>Japanese Festivals</span>
            <span className={style.exploreBox}>Japanese Nature</span>
            <span className={style.exploreBox}>History in Japan</span>
            <span className={style.exploreBox}>Relaxation in Japan</span>
            <span className={style.exploreBox}>Shopping in Japan</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Content;
