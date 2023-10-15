import React from 'react';
import Image from 'next/image';
import coverImage from '../images/cover.png';
import styles from './About.module.css'; // Import the CSS module
import Layout from '../components/Layout/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <main className="page">
                {/* Riptide */}
                <div className={styles.characterSummary}>
                    <div className={styles.characterContent}>
                        <div className={styles.characterImage}>
                            <Image
                                src={coverImage}
                                alt="Riptide"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>Riptide</span>
                            </h2>
                            <p>
                                Riptide, the Salty Curmudgeon of our story, is like the ocean in a bad mood - unpredictable, sarcastic, and full of salty wisdom. With more experience than a cat has lives (and probably just as many scars), Riptide is our go-to guy when it comes to advice, albeit sometimes controversial. His take on life is a mix of gritty realism and dry humor, making every pearl of wisdom he imparts feel like a comedic punchline. When Riptide speaks, you can bet your last doubloon that you will laugh and cringe in equal measure, but you will never forget his hilarious and sometimes dubious advice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Blaze */}
                <div className={styles.characterSummary}>
                    <div className={styles.characterContent}>
                        <div className={styles.characterImage}>
                            <Image
                                src={coverImage}
                                alt="Blaze"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>Blaze</span>
                            </h2>
                            <p>
                                Blaze, the enigmatic character of our tale, is the quiet giant with a voice that carries more weight than a cargo ships anchor. While Riptide storms in with his brash wisdom, Blaze prefers the calm before the storm, and when he finally speaks, the world stands still. His words are few, but they hold the power to shift tides and turn the tide of any debate. In the midst of Riptides raucous rants, Blazes quiet utterances often steal the show, leaving everyone hanging on to his every word. He is the silent sage, and when he talks, everyone listens, hoping to catch a glimpse of his profound and intriguing insights.
                            </p>
                        </div>
                    </div>
                </div>

                {/* KillJoy */}
                <div className={styles.characterSummary}>
                    <div className={styles.characterContent}>
                        <div className={styles.characterImage}>
                            <Image
                                src={coverImage}
                                alt="KillJoy"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className={styles.characterDescription}>
                            <h2>
                                <span className={styles.characterName}>KillJoy</span>
                            </h2>
                            <p>
                                KillJoy, the relentless buzzkill of our crew, is the raincloud on our parade, the spoiler of joyous moments, and the extinguisher of fireworks - you name it, KillJoy can bring it down. But beneath that dark exterior lies a heart of gold, a heart that often feels a pang of remorse after crashing yet another positive moment. It is as if they were born with a No Fun Allowed sign on their forehead and a subscription to the Misery Monthly magazine.
                                Picture this: The crew is celebrating finding a hidden treasure chest, and just when everyone is about to do the happy dance, KillJoy chimes in with a gloomy factoid about treasure taxes, the environmental impact of chest excavation, or the existential crisis of gold doubloons. They may be a party pooper, but they are our party pooper, and deep down, they want nothing more than to see their shipmates happy (or at least in a mildly content state).
                                So, in the grand comedy of life on the high seas, KillJoy is the grumbling punchline we all secretly adore, because, lets face it, without them, the journey just would not be as hilariously bittersweet.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default About;
