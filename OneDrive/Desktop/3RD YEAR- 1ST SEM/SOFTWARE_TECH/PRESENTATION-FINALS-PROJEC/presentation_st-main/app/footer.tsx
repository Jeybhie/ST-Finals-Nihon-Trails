import React from 'react'
import style from './footer.module.css';
const footer = () => {
  return (
    <div className={style.footerMainContainer}>
      <div className={style.footerContainer}>
        <section className={style.websiteTitleArea}>
          <img src="/LANDINGPAGEASSETS/favicon.png" />
          <p>Subscribe Now</p>
          <button className={style.websitetitlebutton}>Subscribe</button>
        </section>
        <section className={style.information}>
          <p className={style.footerHeaders}>Information</p>
          <p>About Us</p>
          <p>More search</p>
          <p>Blog</p>
          <p>Events</p>
        </section>
        <section className={style.helpFulLinks}>
          <p className={style.footerHeaders}>Helpful Links</p>
          <p>Services</p>
          <p>Supports</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </section>
          <section className={style.contactUs}>
          <p className={style.footerHeaders}>Contact Us</p>
          <div className={style.contacts}><img src="/ICONS/ICON-PHONE.png" /><p>09469796509</p></div>
          <div className={style.contacts}><img src="/ICONS/ICON-EMAIL.png" /><p>nihontrails@gmail.com</p></div>
          <div className={style.contacts}><img src="/ICONS/FOOTER-FACEBOOK.png" /><p>Nihon Trails Page</p></div>
          <div className={style.contacts}><img src="/ICONS/FOOTER-INSTAGRAM.png"/><p>@nihontrailsofficial</p></div>
        </section>
      </div>
      <div className={style.socialMediaContainer}>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Terms of Use</p>
         <p>Link</p>
      </div>
       <p>�� 2024 Nihon Trails. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
    </div>
  )
}

export default footer
