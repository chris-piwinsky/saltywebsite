import React from 'react';
import Image from 'next/image';
import logoImage from '../../images/main.png';
import styles from './Main.module.css';


const Main = () => {
  return (
    <main className="page">
      <div className={`flex flex-col md:flex-row items-center ${styles.mainContainer}`}>
        <div className={`md:w-1/2 md:pl-8 ${styles.textContainer}`}>
          <div>
            <h1 className={`${styles.myHeading} ${styles.podcastHeading}`}>The Salty Curmudgeons</h1>
            <p className={`${styles.myParagraph} ${styles.podcastDescription}`}>
              Three entertaining guys sharing life experiences and thoughts on culture, lifestyle, current events, and sports.
            </p>
          </div>
          <div className={`${styles.podcastSection}`}>
            <p className={`${styles.myParagraph} ${styles.podcastDescription}`}>
              Find us on:
            </p>

            <ul>
              <li>
                <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer">
                  Apple Podcasts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`md:w-1/2 ${styles.imageContainer}`}>
          <div className={styles.responsiveImage}>
            <Image
              src={logoImage}
              alt="Main Image"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
