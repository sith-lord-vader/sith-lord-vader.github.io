import { nanoid } from "nanoid";
import Head from "next/head";
import { Fragment, useState } from "react";
import { CgPexels, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/all";
import s from "../styles/Home.module.scss";
import useWindowSize from "../utils/useWIndowDimensions";

export default function Home() {
    const { width, height } = useWindowSize();
    const [socialDetails, setSocialDetails] = useState({
        github: {
            url: "https://github.com/abhishekadhikari23",
            icon: FaGithub,
            color: "#ffffff",
            bgColor: "#282d3f"
        },
        linkedin: {
            url: "https://linkedin.com/in/abhiayush23",
            icon: FaLinkedinIn,
            color: "#ffffff",
            bgColor: "#0a6ccd"
        },
        instagram: {
            url: "https://www.instagram.com/xpertr2/",
            icon: FaInstagram,
            color: "#ffffff",
            bgColor: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
        },
        pexels: {
            url: "https://www.pexels.com/@abhishek-adhikari-408239051/",
            icon: CgPexels,
            color: "#ffffff",
            bgColor: "#50aba0"
        },
        facebook: {
            url: "https://www.facebook.com/abhiayush23/",
            icon: FaFacebookF,
            color: "#ffffff",
            bgColor: "#4267B2"
        }
    });
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

            <div className={s.container}>
                <div className={s.highlight}>
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

                    <div className={s.spacer}></div>

                    <p>
                        I am a highly motivated SRE with a deep understanding of Full-Stack Development. Using my knowledge of React, Ionic, and Next.js, I am able to build
                        responsive and intuitive applications that deliver exceptional performance. My background in system administration and infrastructure management makes me
                        well-suited to ensure the availability and scalability of the systems I work on. I am committed to staying on the cutting edge of technology and am always
                        looking for new challenges and opportunities to grow.
                    </p>

                    <div className={s.social}>
                        {Object.values(socialDetails).map(e => {
                            return (
                                <a href={e.url} key={nanoid()} rel={"no-referrer"} target={"_blank"} className={s.socialLink} style={{ background: e.bgColor }}>
                                    <e.icon className={s.socialIcon} style={{ color: e.color }}></e.icon>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className={s.highlightImage}>
                    <div></div>
                    <article></article>
                </div>
            </div>
        </Fragment>
    );
}
