// Dependency imports 
import Head from 'next/head'
import styles from '../styles/Home.module.scss';

import Image from "next/image"

// Objects & Styles


// Components
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


// Function
export default function Home(props) {
  const router = useRouter();

  const [location, setLocation] = useState({});

  useEffect(() => {
    // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
    navigator.geolocation.getCurrentPosition(function (position) {
      const { coords: { latitude: lat, longitude: long } } = position
      setLocation({ lat, long })
    })
  }, [setLocation])

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="description" content="Search the state of current weather in your location with the amazingly fast web app powered by NEXT.JS" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link key='googleFontsConnect' rel="preconnect" href="https://fonts.googleapis.com" />
        <link key='googleFontsCrossOrigin' rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link key='googleFonts'
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <div className={`pageContainer ${styles.page}`} >

        <main className={styles.main}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Weather <br />Application</h1>
            <h5 className={styles.text}>
              A Weather app using React JS and Sass by <span className={styles.name}>M. Shahzeb Raza</span>
            </h5>
            <Link href={{
              pathname: `/weather/[query]`,
              query: {
                query: `${location.lat},${location.long}`
              }
            }} className={styles.search}>Search Weather</Link>
          </div>

          <div className={styles.graphic}>
            <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
          </div>
        </main>

      </div>
    </>
  );
}

Home.displayName = `Home`