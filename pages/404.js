import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Favicon from "../components/Favicon";
import marioImg from "../images/mario-run.gif";
import s from "../styles/404.module.scss";

export default function FourOhFour() {
    return (
        <>
            <Favicon></Favicon>
            <Head>
                <title>It&apos;s Mario Time | Abhishek Adhikari | SRE, Full-Stack Developer, Traveler</title>
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
                <div className={s.mainSection}>
                    <Image src={marioImg} alt="It's Mario Time" />
                    <div className={s.text}>
                        <h1>Oops! Something went wrong.</h1>
                        <h3>
                            Maybe I&apos;m working on something. While I fix it have some <span style={{ color: "#ff3c14" }}>Mario Time!</span>
                        </h3>

                        <div className={s.links}>
                            <Link href={"/"} className={s.home}>
                                Go Back To Homepage
                            </Link>

                            <Link rel={"noreferrer"} href="https://github.com/abhishekadhikari23/abhishekadhikari23.github.io" target={"_blank"} className={s.github}>
                                Find the source code in GitHub <FaGithub></FaGithub>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
