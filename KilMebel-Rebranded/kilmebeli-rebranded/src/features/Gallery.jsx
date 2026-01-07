import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import { Button } from "../components/Button";
import styles from "../styles/Gallery.module.css";

export function Gallery() {
  const [currentKitchenIndex, setCurrentKitchenIndex] = useState(0);
  const [currentBedroomIndex, setCurrentBedroomIndex] = useState(0);
  const [currentOtherIndex, setCurrentOtherIndex] = useState(0);

  const kitchenImages = [
    "https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MzcwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2NzQzMDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MzYyNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const bedroomImages = [
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NzM0OTM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY3MzU4MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const otherImages = [
    "https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY3NDM1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1717911100009-717b917b401c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NzQzNTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Разгледайте нашите проекти и вдъхновете се за вашия следващ дизайн
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