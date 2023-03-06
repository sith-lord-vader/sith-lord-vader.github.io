import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <div className="next-container">
            <Component {...pageProps} />
            <Analytics />
        </div>
    );
}

export default MyApp;
