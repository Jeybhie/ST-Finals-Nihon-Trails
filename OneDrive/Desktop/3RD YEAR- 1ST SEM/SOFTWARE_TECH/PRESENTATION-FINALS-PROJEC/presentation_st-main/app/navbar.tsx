import React from 'react'
import loginStyle from "./LogInPage.module.css";
import Link from "next/link";
const navbar = () => {
  return (
     <div className={loginStyle.navigationContainer}>
              <Link href={"./"} ><img src="/LANDINGPAGEASSETS/favicon.png" className={loginStyle.websiteTitle}/></Link>
      <nav className={loginStyle.navigationBar}>
                <Link href={"./"} className={loginStyle.navLinks}>Home</Link>
                <Link href={"/DISCOVER"} className={loginStyle.navLinks}>Discover</Link>
          
             </nav>
    </div>
  )
}

export default navbar
