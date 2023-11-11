import React, { useState, useRef } from 'react';
import styles from "./ImageCarousel.module.css";
import { Link } from 'react-router-dom';
import arrowLeft from "../../resources/images/arrow-left.svg";
import arrowRight from "../../resources/images/arrow-right.svg";

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselRef = useRef(null);

    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };

    const goToPrevious = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const thumbnailClass = styles.active;

    return (
        <div className={styles.imageCarouselContainer}>
            <div className={styles.imageCarousel}>
                <div className={styles.carouselContainer}>
                    <div 
                    className={styles.carouselImage}
                    ref={carouselRef}
                    >
                    {images[currentImageIndex].title === "Tea Cozy" ? 
                    <Link to={images[currentImageIndex].link}><img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt}/></Link> : 
                    <a href={images[currentImageIndex].link}><img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} /></a>}
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <img className={styles.arrow} src={arrowLeft} alt="previous project" onClick={goToPrevious}/>
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Thumbnail ${index}`}
                        className={index === currentImageIndex ? thumbnailClass : ''}
                        onClick={() => changeImage(index)}
                    />
                    ))}
                    <img className={styles.arrow} src={arrowRight} alt="next project" onClick={goToNext}/>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{images[currentImageIndex].title}</h2>
                <p className={styles.projectDescription}><hr/>{images[currentImageIndex].description}</p>
            </div>
        </div>
    );
};

export default ImageCarousel;

