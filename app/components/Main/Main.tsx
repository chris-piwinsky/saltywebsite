import React from 'react';
import Image from 'next/image';
import logoImage from '../../images/cover.png';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className="page">
      <div className={`flex flex-col md:flex-row items-center ${styles.mainContainer}`}>
        <div className={`md:w-1/2 md:pl-8 ${styles.textContainer}`}>
          <div>
            <h1 className={styles.myHeading}>The Salty Curmudgeons</h1>
            <p className={styles.myParagraph}>
              Three entertaining guys sharing life experiences and thoughts on culture, lifestyle, current events, and sports.
              {/* Add your paragraphs here */}
            </p>
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
