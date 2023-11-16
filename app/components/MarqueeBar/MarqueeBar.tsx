import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './MarqueeBar.module.css';

const links = [
  { href: "https://podcasts.apple.com/us/podcast/the-salty-curmudgeons/id1715042963", text: "Apple" },
  { href: "https://open.spotify.com/show/2aV6G4COFFHBCZC3DowS2E?si=f377c81eedf1463d", text: "Spotify" },
  { href: "https://music.amazon.com/podcasts/6319f8ad-470d-489b-af0b-f2f2a8a654f1/the-salty-curmudgeon", text: "Amazon" },
  { href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMjU4OTQ4LnJzcw==", text: "Google" },
  { href: "https://podcastindex.org/podcast/6672725", text: "Podcast Index" },
  { href: "https://tunein.com/podcasts/Comedy/The-Salty-Curmudgeons-p3908895/?topicId=345103752", text: "TuneIn" },
  { href: "https://www.listennotes.com/podcasts/the-salty-curmudgeons-the-salty-curmudgeons-GNUck79Cex3/", text: "Listen Notes" },
  { href: "https://www.iheart.com/podcast/269-the-salty-curmudgeons-127461286/", text: "iHeart Radio" },
  { href: "https://www.podchaser.com/podcasts/the-salty-curmudgeons-5521123", text: "Podchaser" },
  { href: "https://podcastaddict.com/podcast/the-salty-curmudgeons/4719833", text: "Podcast Addict" },
  { href: "https://www.deezer.com/us/show/1000410521", text: "Deezer" },
  { href: "https://player.fm/series/the-salty-curmudgeons", text: "Player FM" },
  { href: "https://castro.fm/podcast/a66de547-cb8b-493d-99ce-5fea95fe660f", text: "Castro" },
  { href: "https://castbox.fm/channel/The-Salty-Curmudgeons-id5666594?country=us", text: "Castbox" },
  { href: "https://www.podfriend.com/podcast/the-salty-curmudgeons/", text: "Podfriend" },
  { href: "https://goodpods.com/podcasts/the-salty-curmudgeons-286175", text: "Goodpods" },


  // Add more links as needed
];


const MarqueeBar = () => {
  return (
    <div className={styles.marqueeContainer}>
      <Marquee>
        <div className={styles.linkGroup}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a className={styles.marqueeLink} href={link.href}>
                {link.text}
              </a>
              {index < links.length - 1 && (
                <span className={styles.linkSeparator}> • </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
