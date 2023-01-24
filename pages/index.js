import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";
import useWindowSize from "../utils/useWIndowDimensions";

export default function Home() {
    const { width, height } = useWindowSize();
    return (
        <Fragment>
            <Head>
                <title>Abhishek Adhikari | SRE, Full-Stack Developer, Traveler</title>
                <meta name="title" content="Abhishek Adhikari | SRE, Full-Stack Developer, Traveler" />
                <meta
                    name="description"
                    content="SRE @ Media.Net | I am a highly motivated SRE with a deep understanding of Full-Stack Development. Using my knowledge of React, Ionic, and Next.js, I am able to build responsive and intuitive applications that deliver exceptional performance. My background in system administration and infrastructure management makes me well-suited to ensure the availability and scalability of the systems I work on. I am committed to staying on the cutting edge of technology and am always looking for new challenges and opportunities to grow."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.abhishekadhikari.rocks/" />
                <meta property="og:title" content="Abhishek Adhikari | SRE, Full-Stack Developer, Traveler" />
                <meta
                    property="og:description"
                    content="SRE @ Media.Net | I am a highly motivated SRE with a deep understanding of Full-Stack Development. Using my knowledge of React, Ionic, and Next.js, I am able to build responsive and intuitive applications that deliver exceptional performance. My background in system administration and infrastructure management makes me well-suited to ensure the availability and scalability of the systems I work on. I am committed to staying on the cutting edge of technology and am always looking for new challenges and opportunities to grow."
                />
                <meta property="og:image" content="https://www.abhishekadhikari.rocks/new_dp.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.abhishekadhikari.rocks/" />
                <meta property="twitter:title" content="Abhishek Adhikari | SRE, Full-Stack Developer, Traveler" />
                <meta
                    property="twitter:description"
                    content="SRE @ Media.Net | I am a highly motivated SRE with a deep understanding of Full-Stack Development. Using my knowledge of React, Ionic, and Next.js, I am able to build responsive and intuitive applications that deliver exceptional performance. My background in system administration and infrastructure management makes me well-suited to ensure the availability and scalability of the systems I work on. I am committed to staying on the cutting edge of technology and am always looking for new challenges and opportunities to grow."
                />
                <meta property="twitter:image" content="https://www.abhishekadhikari.rocks/new_dp.jpg" />
            </Head>

            <div className={styles.container}>
                <div className={styles.highlight}>
                    <h3>
                        {width > 786 ? "Site Reliability Engineer " : "SRE "}@{" "}
                        <a href="https://www.media.net/" target={"_blank"} alt="Media.Net" rel="noreferrer">
                            Media<span>.</span>Net
                        </a>
                    </h3>
                    <h1>
                        <span>Hi, I am</span>
                        {width > 786 ? " " : <br></br>}
                        <div>Abhishek Adhikari</div>
                    </h1>

                    <div></div>

                    <p>
                        I am a highly motivated SRE with a deep understanding of Full-Stack Development. Using my knowledge of React, Ionic, and Next.js, I am able to build
                        responsive and intuitive applications that deliver exceptional performance. My background in system administration and infrastructure management makes me
                        well-suited to ensure the availability and scalability of the systems I work on. I am committed to staying on the cutting edge of technology and am always
                        looking for new challenges and opportunities to grow.
                    </p>
                </div>
                <div className={styles.highlightImage}>
                    <div></div>
                    <article></article>
                </div>
            </div>
        </Fragment>
    );
}
