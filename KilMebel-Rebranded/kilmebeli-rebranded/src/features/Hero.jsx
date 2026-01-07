import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import styles from "../styles/Hero.module.css";

export function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundOverlay}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765371513189-44702dcee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZGV0YWlsfGVufDF8fHx8MTc2NzQzNTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Furniture craftsmanship"
          className={styles.bgImage}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>ПРЕМИУМ МЕБЕЛИ ПО ПОРЪЧКА</p>
          <h2 className={styles.title}>
            Красиво изработени мебели в модерен стил
          </h2>
          <p className={styles.description}>
            С внимание към всеки детайл, нашите мебели съчетават стил, комфорт и функционалност. 
            Съвременният дизайн и висококачествените материали създават усещане за уют и елегантност във всяко пространство.
          </p>
          <div className={styles.actions}>
            <Button 
              size="lg" 
              className={styles.primaryBtn}
              onClick={scrollToGallery}
            >
              Галерия
              <ArrowRight className={styles.buttonIcon} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={styles.outlineBtn}
              onClick={scrollToContact}
            >
              Свържете се с нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}