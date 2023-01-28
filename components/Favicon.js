import { useEffect } from "react";

const Favicon = () => {
    useEffect(() => {
        let favicon_images = [];
        for (let i = 0; i <= 24; i++) {
            if (i < 10) favicon_images.push(`/favicon/frame_0${i}_delay-0.02s.png`);
            else favicon_images.push(`/favicon/frame_${i}_delay-0.02s.png`);
        }
        let image_counter = 0; // To keep track of the current image

        setInterval(function () {
            // remove current favicon
            if (document.querySelector("link[rel='icon']") !== null) document.querySelector("link[rel='icon']").remove();
            if (document.querySelector("link[rel='shortcut icon']") !== null) document.querySelector("link[rel='shortcut icon']").remove();

            // add new favicon image
            document.querySelector("head").insertAdjacentHTML("beforeend", '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

            // If last image then goto first image
            // Else go to next image
            if (image_counter == favicon_images.length - 1) image_counter = 0;
            else image_counter++;
        }, 20);
    }, []);

    return <></>;
};

export default Favicon;
