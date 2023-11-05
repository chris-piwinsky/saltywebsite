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
            <p className={`${styles.comingSoon}`}>
              Now LIVE on your favorite podcast platform!
            </p>
            <p className={`${styles.myParagraph} ${styles.podcastDescription}`}>
              Not afraid to speak their minds, the Salty Curmudgeons share their wisdom & thoughts on culture, lifestyle, current events, and sports. Sometimes controversial and always entertaining, our conversations are geared to make you laugh, think, and sometimes feel a little salty!
            </p>
          </div>
          <div className={`${styles.podcastSection}`}>
            <div className={styles.platformBox}>
              <p className={styles.platformText}>Listen to us on these platforms:</p>
              <ul className={styles.platformList}>
                <li><a href="https://open.spotify.com/show/2aV6G4COFFHBCZC3DowS2E?si=f377c81eedf1463d">Spotify</a></li>
                <li><a href="https://link-to-amazon-music.com">Amazon</a></li>
                <li><a href="https://podcast-index.org">Podcast Index</a></li>
              </ul>
            </div>
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
