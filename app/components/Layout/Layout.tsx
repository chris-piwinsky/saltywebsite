// Layout.js
import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import MarqueeBar from '../MarqueeBar/MarqueeBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {/* <MarqueeBar /> */}
      <div className={styles.contentContainer}>
        <div className={styles.centeredContent}>{children}</div>
      </div>
      <MarqueeBar />
      <Footer />
    </div>
  );
};

export default Layout;
