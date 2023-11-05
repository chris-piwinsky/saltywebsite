"use client"

import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import Image from 'next/image';
import styles from './RssFeed.module.css'; // Import a CSS module for styling
import episodeImage from '../../images/episodes.png'; // Import the image you want to use

// Define an interface for RSS feed items
interface FeedItem {
  title: string;
  link: string;
}

const RssFeed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    const parser = new Parser();

    parser.parseURL('https://feeds.buzzsprout.com/2258948.rss')
      .then((data) => {
        if (data.items) {
          // Transform the data into the desired format (FeedItem)
          const transformedItems: FeedItem[] = data.items.map((item) => ({
            title: item.title || '',
            link: item.enclosure ? item.enclosure.url : '', // Use item.enclosure.url for the link
          }));
          setFeedItems(transformedItems);
        }
      })
      .catch((error) => {
        console.error('Error fetching RSS:', error);
      });
  }, []);

  return (
    <div className={styles.centeredRssFeedContainer}> {/* Apply CSS class for styling */}
      <Image
        src={episodeImage}
        alt="Logo"
        className={styles.episodeImage}
        width={200}
        height={100}
      />
      <h1 className={styles.rssFeedTitle}>Current Episodes</h1>
      <ul className={styles.rssFeedList}>
        {feedItems.map((item, index) => (
          <li key={index} className={styles.rssFeedItem}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RssFeed;
