import React from 'react';
import styles from './Platforms.module.css'; // Import the CSS module
import Layout from '../components/Layout/Layout';

const Platforms: React.FC = () => {
  const platforms = [
    {
      id: 1,
      name: 'Spotify',
      url: 'https://www.spotify.com/',
    },
    {
      id: 2,
      name: 'Apple Podcasts',
      url: 'https://www.apple.com/apple-podcasts/',
    },
  ];

  return (
    <Layout>
      <main className="page">
        <section className={styles.aboutSection}>
          <h1>About Us</h1>
          <p>Learn more about our podcast and where you can listen to it:</p>
        </section>
        <section className={styles.platformsSection}>
          <h2>Podcast Platforms</h2>
          <ul>
            {platforms.map((platform) => (
              <li key={platform.id}>
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default Platforms;
