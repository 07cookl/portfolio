import React, { useState, useRef } from 'react';
import styles from "./ImageCarousel.module.css";
import arrowUp from "../../resources/images/arrow-up.svg";
import arrowDown from "../../resources/images/arrow-down.svg";

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(null);
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

    const handleMouseDown = (e) => {
        setDragging(true);
        setDragStartX(e.clientX);
    };

    const handleMouseUp = () => {
    setDragging(false);
    setDragStartX(null);
    };

    const handleMouseMove = (e) => {
    if (dragging && dragStartX !== null) {
        const diffX = e.clientX - dragStartX;
        if (diffX > 50) {
        goToPrevious();
        setDragStartX(e.clientX);
        } else if (diffX < -50) {
        goToNext();
        setDragStartX(e.clientX);
        }
    }
    };

    const thumbnailClass = styles.active;


    return (
        <div className={styles.imageCarouselContainer}>
            <div className={styles.imageCarousel}>
                <div className={styles.carouselContainer}>
                    <div 
                    className={styles.carouselImage}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    ref={carouselRef}
                    >
                    <a href={images[currentImageIndex].link}><img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} /></a>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <img className={styles.arrow} src={arrowUp} alt="previous project" onClick={goToPrevious}/>
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Thumbnail ${index}`}
                        className={index === currentImageIndex ? thumbnailClass : ''}
                        onClick={() => changeImage(index)}
                    />
                    ))}
                    <img className={styles.arrow} src={arrowDown} alt="next project" onClick={goToNext}/>
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

