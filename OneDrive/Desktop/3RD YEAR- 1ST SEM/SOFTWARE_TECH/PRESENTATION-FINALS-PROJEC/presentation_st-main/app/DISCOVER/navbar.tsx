import React from 'react'
import style from './navbarstyle.module.css';
import Link from "next/link";
const navbar = () => {
  return (
     <div className={style.navigationContainer}>
              <Link href={"./"} ><img src="/LANDINGPAGEASSETS/favicon.png" className={style.websiteTitle}/></Link>
      <nav className={style.navigationBar}>
                <Link href={"./"} className={style.navLinks}>Home</Link>
                <Link href={"/DISCOVER"} className={style.navLinks}>Discover</Link>
          
             </nav>
    </div>
  )
}

export default navbar
