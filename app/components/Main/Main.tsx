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
              Coming THIS NOVEMBER to a podcast near you
            </p>
            <p className={`${styles.myParagraph} ${styles.podcastDescription}`}>
              Three entertaining guys sharing life experiences and thoughts on culture, lifestyle, current events, and sports.
            </p>
          </div>
          <div className={`${styles.podcastSection}`}>
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
