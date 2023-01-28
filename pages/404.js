import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import marioImg from "../images/mario-run.gif";
import s from "../styles/404.module.scss";

export default function FourOhFour() {
    return (
        <>
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
