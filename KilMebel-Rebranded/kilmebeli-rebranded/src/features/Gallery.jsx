import { useState } from "react";
import { Bone, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import { Button } from "../components/Button";
import styles from "../styles/Gallery.module.css";

import one from '../assets/Kitchens/1.jpg';
import two from '../assets/Kitchens/2.jpg';
import three from '../assets/Kitchens/3.jpg';
import four from '../assets/Kitchens/4.jpg';
import five from '../assets/Kitchens/5.jpg';
import six from '../assets/Kitchens/6.jpg';
import seven from '../assets/Kitchens/7.jpg';
import eight from '../assets/Kitchens/8.jpg';

import bOne from '../assets/Bedrooms/1.jpg';
import bTwo from '../assets/Bedrooms/2.jpg';
import bThree from '../assets/Bedrooms/3.jpg';
import bFour from '../assets/Bedrooms/4.jpg';

import oONE from '../assets/Other/1.jpg';
import oTwo from '../assets/Other/2.jpg';
import oThree from '../assets/Other/3.jpg';
import oFour from '../assets/Other/4.jpg';


export function Gallery() {
  const [currentKitchenIndex, setCurrentKitchenIndex] = useState(0);
  const [currentBedroomIndex, setCurrentBedroomIndex] = useState(0);
  const [currentOtherIndex, setCurrentOtherIndex] = useState(0);

  const kitchenImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
  ];

  const bedroomImages = [
    bOne,
    bTwo,
    bThree,
    bFour
  ];

  const otherImages = [
    oONE,
    oTwo,
    oThree,
    oFour
  ];

  const CarouselSection = ({ title, images, currentIndex, setIndex }) => {
    const nextSlide = () => {
      setIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
      setIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
      <div className={styles.carouselContainer}>
        <h3 className={styles.carouselTitle}>{title}</h3>
        <div className={styles.carouselWrapper}>
          <div className={styles.imageFrame}>
            <ImageWithFallback
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className={styles.galleryImage}
            />
          </div>
          
          {images.length > 1 && (
            <>
              <Button
                onClick={prevSlide}
                variant="ghost"
                size="icon"
                className={styles.navButtonLeft}
              >
                <ChevronLeft className={styles.icon} />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="ghost"
                size="icon"
                className={styles.navButtonRight}
              >
                <ChevronRight className={styles.icon} />
              </Button>

              <div className={styles.dotsWrapper}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setIndex(index)}
                    className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Галерия</h2>
          <p className={styles.subtitle}>
            Разгледайте нашите проекти и се вдъхновете за вашия следващ дизайн
          </p>
        </div>

        <div className={styles.mainGallery}>
          <CarouselSection 
            title="Кухни"
            images={kitchenImages}
            currentIndex={currentKitchenIndex}
            setIndex={setCurrentKitchenIndex}
          />
          
          <CarouselSection 
            title="Спални"
            images={bedroomImages}
            currentIndex={currentBedroomIndex}
            setIndex={setCurrentBedroomIndex}
          />
          
          <CarouselSection 
            title="Други"
            images={otherImages}
            currentIndex={currentOtherIndex}
            setIndex={setCurrentOtherIndex}
          />

          <div className={styles.footerLink}>
            <p>
              Виж още в нашата{" "}
              <a 
                href="https://www.facebook.com/kenderov?locale=bg_BG" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.facebookLink}
              >
                Facebook страница
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}