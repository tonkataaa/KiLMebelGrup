import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import styles from "../styles/Promo.module.css";

import indexCard from '../assets/index-card.jpg';

export function Promo() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.promoCard}>
          <div className={styles.grid}>
            <div className={`${styles.imageWrapper} ${styles.orderMobile2}`}>
              <div className={styles.imageContainer}>
                <ImageWithFallback
                  src={indexCard}
                  alt="Modern home interior"
                  className={styles.image}
                />
              </div>
            </div>

            <div className={`${styles.contentWrapper} ${styles.orderMobile1}`}>
              <h2 className={styles.title}>
                Подари красивата външност на твоя дом
              </h2>
              <p className={styles.description}>
                Създай пространство, което вдъхновява – с мебели, които съчетават съвременен стил, 
                естествени материали и прецизна изработка. От модерни линии до топли дървесни акценти – 
                всичко е проектирано да внесе уют, елегантност и индивидуалност във всяка стая.
              </p>
              <Button 
                className={styles.promoButton}
                onClick={scrollToGallery}
              >
                Разгледай галерията
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}