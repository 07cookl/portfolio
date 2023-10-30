import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green';
import imagesForCarousel from "../../util/images";

export default function Projects () {

    const renderSlides = () => {
        return imagesForCarousel.map((slide, index) => (
            <SplideSlide key={index}>
                <a href={slide.link}><img src={slide.src} alt={slide.alt} /></a>
            </SplideSlide>
        ))
    }

    const renderThumbnails = () => {
        return imagesForCarousel.map((slide, index) => (
            <SplideSlide key={index}>
                <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
        ))
    }

    const mainRef = React.createRef();
    const thumbsRef = React.createRef();

    const mainOptions = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        arrows: false,
        pagination: false,
    };

    const thumbsOptions = {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true
    };

    useEffect(() => {
        mainRef.current.sync(thumbsRef.current.splide);
    }, [mainRef, thumbsRef]);

    return (
        <div className="wrapper">
            <h2>My Projects</h2>

            <Splide
                options={mainOptions}
                ref={mainRef}
                aria-labelledby="main carousel slide"
            >
                {renderSlides()}
            </Splide>

            <Splide
                options={thumbsOptions}
                ref={thumbsRef}
                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            >
                {renderThumbnails()}
            </Splide>
        </div>
    )
}