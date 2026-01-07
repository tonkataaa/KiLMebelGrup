import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import styles from "../styles/Promo.module.css";

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
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MzYyNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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