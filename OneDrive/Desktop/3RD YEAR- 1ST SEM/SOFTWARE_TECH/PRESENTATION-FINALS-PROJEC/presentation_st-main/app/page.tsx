import Image from "next/image";
import Link from "next/link";
import loginStyle from "./LogInPage.module.css";
import LandingPage from "./LANDING/landing";
import NavBar from './navbar';

export default function Home() {
  return (
    <body>
      <main>
          <div className = {loginStyle.background}></div>
        <NavBar />
        <LandingPage/>
      </main>
    </body>

  );
}