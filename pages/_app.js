import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <div className="next-container">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
