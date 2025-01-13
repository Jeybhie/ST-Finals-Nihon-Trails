import React from 'react';
import style from './landingstyle.module.css';
import Script from './landingjavascript.js';
import style2 from './secondlandingstyle.module.css';
import Footer from '../footer';
const landing = () => {
  return (
    <div className={style.main}>
      <Script/>
      <div className={style.introductionImagesContainer}>
        <div className={style.imageContainer}>
          <img src="/LANDINGPAGEASSETS/KIYOMIZUDERA TEMPLE.jpg" className={style.image1} id="image1" />
          <img src="/LANDINGPAGEASSETS/NISHIKI.jpeg" className={style.image2} id="image2" />
          <img src="/LANDINGPAGEASSETS/HIGASHIYAMA.jpg" className={style.image3} id="image3" />
           <img src="/LANDINGPAGEASSETS/GINKGO-PARK.jpeg" className={style.image4} id="image4" />
        </div>
        <div className={style.introheader} id="header1">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Kiyomizudera Temple</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Higashiyama Ward, Kyoto</p>  
        </div>
        <div className={style.introheader2} id="header2">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Nishiki Market</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Kamo, Kansai</p>  
        </div>
           <div className={style.introheader3} id="header3">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Higashiyama District</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Yasaka, Kanto</p>  
        </div>
           <div className={style.introheader4} id="header4">
          <p className={style.firstheader}>Nihon Trails</p>
          <p className={style.secondheader}>Maruyama Park</p>
          <p className={style.thirdheader}>  <img src="/ICONS/ICON-LOCATION.png" className={style.locationicon} />
            Kenninji, Kyoto</p>  
        </div>
{/* 
        <button className={style.discoverPageButton}>
          Discover More
        </button> */}
  
        <div className={style.introcarouselContainer}>
          <span className={style.aboutUsContainer}>
            <a href="#Learn" ><p>About</p></a>
            <p>Best Spots In Japan</p>
          </span>
          <section className={style.carouselImagesContainer}>
              <button id="prev">&#10094;</button>
              <img src="/LANDINGPAGEASSETS/KIYOMIZUDERA TEMPLE.jpg" id="carouselimg1"/>
              <img src="/LANDINGPAGEASSETS/NISHIKI.jpeg" id="carouselimg2"/>
              <img src="/LANDINGPAGEASSETS/HIGASHIYAMA.jpg" id="carouselimg3"/>
            <img src="/LANDINGPAGEASSETS/GINKGO-PARK.jpeg" id="carouselimg4"/>  
            <button id="next"> &#10095;</button>
            </section>
           </div>
      </div>
      <div className={style.contentContainer}>
      <section className={style.headerContainer}>
        <section className={style.regionsOfJapanContainer} id="element1"> 
                  <h4>Travel Japan</h4>
        </section>
        </section>

          <section className={style.travelContainer}>
          <p>RECOMMENDED DESTINATIONS​</p>
          <p>Find out more about destinations that take care of their place and their local community.</p>
        </section>
        
        <div className={style.recommendedcontainer}>
          <div className={style.recommendedRow}>
            <span className={style.rowImageContainer} id="show1"><img src="/LANDINGPAGEASSETS/KINKAKU-JI.jpg" />
              <p className={style.placeName}>KINKAKU-JI TEMPLE</p>
              <p className={style.placeLocation}>Kita Ward, Kyoto</p>
            </span>
            <div className={style.column1} id="show2">
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/OKAZAKI.jpg" />
               <p className={style.placeName}>OKAZAKI PARK</p>
                <p className={style.placeLocation}>Kita Ward, Kyoto</p>
              </span>
              <span className={style.columnImage}> <img src="/TOURISM/TOURISM-KYUSHU-DAZAIFU-TENMANGU.webp" />
                 <p className={style.placeName}>WISTERIA GARDEN</p>
                <p className={style.placeLocation}>Kitakyushu, Fukouka</p>
              </span>
            </div>
            <div className={style.column2} id="show3">
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/SHINSEKAI.jpg" />
               <p className={style.placeName}>SHINSEKAI</p>
                <p className={style.placeLocation}>Shinsekai, Osaka</p>
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/KABUKICHO.jpg" />
               <p className={style.placeName}>XAVIER PORTELA</p>
                <p className={style.placeLocation}>Sidewalk, Tokyo</p>
              </span>
            </div>
          </div>

            <div className={style.recommendedRow}>
                   <div className={style.column1} id="show6">
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/KORIN TEMPLE.jpg" />
              <p className={style.placeName}>KASUGA TAISHA</p>
                <p className={style.placeLocation}>Kasuga, Nara</p>
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/LAKE BIWA.jpg" />
               <p className={style.placeName}>SHIRAHIGE SHRINE</p>
                <p className={style.placeLocation}>Torii, Kyoto</p>
              </span>
            </div>
            <div className={style.column2} id="show5">
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/NAHAGOTO.jpg" />
               <p className={style.placeName}>SHINMACHI DORI</p>
                <p className={style.placeLocation}>Kanazawa, Nara</p> 
              </span>
              <span className={style.columnImage}> <img src="/LANDINGPAGEASSETS/MIHAGO SPRINGS.jpg" />
               <p className={style.placeName}>HOSHINO RESORTS</p>
                <p className={style.placeLocation}>Hoshinoya, Kyoto</p>
              </span>
            </div>
            <span className={style.rowImageContainer} id="show4"><img src="/LANDINGPAGEASSETS/KINKAKUJI TEMPLE.jpg" />
             <p className={style.placeName}>KINKAKU-JI TEMPLE</p>
                <p className={style.placeLocation}>Kita-ku, Kyoto</p>
            </span>
          </div>
        </div>
      </div>

      <div className={style2.recommendedJapan}>
      
        <p className={style2.recommendedHeader}>Smooth your way with a little forward planning</p>
        <p className={style2.firstParagraph}>
          It is easy to feel a little overwhelmed and disoriented when you visit Japan<br/>
          for the first time, so find out the basics before you fly and get acquainted with<br/>
          the country through our helping you plan guide.<br/>
        </p>
        <p className={style2.secondParagraph}>
          Learn a little more about Japan's customs, culture and Wi-Fi connectivity, as<br/>
          well as its seasonal weather, geography and luggage delivery options. Many<br/>
          of the questions first-time travelers might have are answered here, along<br/>
          with insider tips and practical advice to help you navigate the country with<br/>
          confidence.
        </p>
      </div>


      <div className={style2.aboutJapan} id="Learn">
        <div className={style2.aboutRow}>

        <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/LANGUAGE.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>LANGUAGE</p>
            <p>Japan's official language is Japanese, but <br/>
              English is generally understood in major cities<br/>
              and designated tourist sites.
            </p>
           <a href="https://www.japan-guide.com/e/e621.html"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a> 
          </div>
          </div>

               <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/WIFI.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>TIMEZONE</p>
              <p>All of Japan sits within the same time zone, and<br/>
                no daylight saving is practiced. The country is<br/>
                nine hours ahead of GMT.
            </p>
            <a href="https://time.is/Japan"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a>
          </div>
          </div>

        </div>
        
        <div className={style2.aboutRow}>
          <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/TIMEZONE.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>WIFI & CONNECTIVITY</p>
              <p>Wireless hotspots are popping up all over major<br/>
                cities in Japan, so you should never be too far<br/>
                from a Wi-Fi connection.
            </p>
            <a href="https://www.japan-guide.com/e/e2279.html"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a>
          </div>
          </div>

          <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/PLUGS.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>PLUGS & ELECTRICITY</p>
              <p>Japan uses two flat parallel prong plugs. For<br/>
                guaranteed charging of your electrical<br/>
                necessities, purchase a plug adapter<br/>
                beforehand.
            </p>
            <a href="https://www.japan-guide.com/e/e2225.html"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a>
          </div>
          </div>

        </div>
            <div className={style2.aboutRow}>
                               <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/CURRENCY.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>CURRENCY</p>
              <p>The Japanese yen is used throughout the<br/>
                country and you can exchange foreign currency<br/>
                at the airports and most major banks
            </p>
           <a href="https://www.japan-guide.com/e/e2196.html"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a>
          </div>
          </div>

          <div className={style2.aboutColumn}>
          <div className={style2.aboutImage}><img src="/LANDINGPAGEASSETS/MANNERS.jpg" /></div>
          <div className={style2.aboutDetails}>
            <p className={style2.aboutHeader}>CUSTOMS & MANNERS</p>
              <p>Following a general travelers code of respect<br/>
                for the people you meet and places you visit will<br/>
                stand you in good stead.
            </p>
            <a href="https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/"><p className={style2.aboutLearnMore}>Learn More &#10095;</p></a>
            </div> 
          </div>
        </div>
      </div>
              <Footer/> 
    </div>
  )
}

export default landing
