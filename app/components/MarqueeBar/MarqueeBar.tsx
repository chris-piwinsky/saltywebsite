import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './MarqueeBar.module.css';

const MarqueeBar = () => {
  return (
    <div className={styles.marqueeContainer}>
      <Marquee>
        <div className={styles.linkGroup}>
          <a className={styles.marqueeLink} href="https://www.google.com">Google</a>
          <span className={styles.linkSeparator}> • </span>
          <a className={styles.marqueeLink} href="#link2">Link 2</a>
          <span className={styles.linkSeparator}> • </span>
          <a className={styles.marqueeLink} href="#link3">Link 3</a>
          {/* You can add more links here */}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
