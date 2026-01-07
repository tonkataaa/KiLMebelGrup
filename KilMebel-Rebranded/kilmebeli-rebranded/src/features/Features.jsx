import { Shield, Award, Truck, Sparkles, Leaf } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallBack";
import styles from "../styles/Features.module.css";

export function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.amberLight}`}>
              <Sparkles className={styles.iconAmber} />
            </div>
            <h3 className={styles.cardTitle}>Високо качество</h3>
            <p className={styles.cardText}>
              Използваме само подбрани материали и модерни технологии, за да гарантираме дълготрайност и прецизна изработка на всеки мебел.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.blueLight}`}>
              <Truck className={styles.iconBlue} />
            </div>
            <h3 className={styles.cardTitle}>Бърза изработка</h3>
            <p className={styles.cardText}>
              Оптимизиран производствен процес, който ни позволява да създадем мечтаните ви мебели в кратки срокове без компромис с качеството.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.iconWrapper} ${styles.greenLight}`}>
              <Shield className={styles.iconGreen} />
            </div>
            <h3 className={styles.cardTitle}>Най-добра гаранция</h3>
            <p className={styles.cardText}>
              Даваме ви спокойствие с дългосрочна гаранция и обслужване, на което можете да разчитате дори след покупката.
            </p>
          </div>
        </div>

        <div id="materials" className={styles.contentRow}>
          <div className={`${styles.imageSide} ${styles.orderMobile2}`}>
            <div className={styles.imageRoundedShadow}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765371513189-44702dcee4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZGV0YWlsfGVufDF8fHx8MTc2NzQzNTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium wood materials"
                className={styles.aspectImage}
              />
            </div>
          </div>
          <div className={`${styles.textSide} ${styles.orderMobile1}`}>
            <h2 className={styles.sectionHeading}>Висококачествени материали</h2>
            <p className={styles.sectionDescription}>
              Избираме само най-добрите материали от устойчиви горски масиви и доверени доставчици. 
              Всяко изделие е създадено с внимание към детайла и издръжливост във времето.
            </p>
            <div className={styles.listContainer}>
              <div className={styles.listItem}>
                <div className={`${styles.smallIconBox} ${styles.amberLight}`}>
                  <Sparkles className={styles.smallIconAmber} />
                </div>
                <div>
                  <h4 className={styles.listTitle}>Подбрана дървесина</h4>
                  <p className={styles.listText}>Внимателно селектирани твърди дървета за издръжливост и красота</p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={`${styles.smallIconBox} ${styles.greenLight}`}>
                  <Leaf className={styles.smallIconGreen} />
                </div>
                <div>
                  <h4 className={styles.listTitle}>Устойчиво производство</h4>
                  <p className={styles.listText}>Екологични материали от сертифицирани доставчици</p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={`${styles.smallIconBox} ${styles.blueLight}`}>
                  <Award className={styles.smallIconBlue} />
                </div>
                <div>
                  <h4 className={styles.listTitle}>Сертифицирано качество</h4>
                  <p className={styles.listText}>Всички материали отговарят на международни стандарти за качество</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="guarantee" className={styles.contentRow}>
          <div className={styles.textSide}>
            <h2 className={styles.sectionHeading}>Дългосрочна гаранция</h2>
            <p className={styles.sectionDescription}>
              Вашата инвестиция в мебелите КиЛ Мебели е защитена с нашата цялостна гаранция. 
              Уверени сме в качеството на изработката си.
            </p>
            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeHeader}>
                <div className={styles.guaranteeBadge}>
                  <Shield className={styles.guaranteeIcon} />
                </div>
                <div>
                  <h3 className={styles.guaranteeTitle}>10-годишна гаранция</h3>
                  <p className={styles.guaranteeSub}>На всички мебелни колекции</p>
                </div>
              </div>
              <ul className={styles.guaranteeList}>
                <li className={styles.guaranteeItem}>
                  <span className={styles.dot}></span>
                  Пълно покритие на структурни дефекти
                </li>
                <li className={styles.guaranteeItem}>
                  <span className={styles.dot}></span>
                  Безплатни ремонти и подмени
                </li>
                <li className={styles.guaranteeItem}>
                  <span className={styles.dot}></span>
                  Доживотна клиентска поддръжка
                </li>
                <li className={styles.guaranteeItem}>
                  <span className={styles.dot}></span>
                  Опции за разширена гаранция
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={`${styles.imageRoundedShadow} ${styles.darkBg}`}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MzYyNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern home interior"
                className={styles.guaranteeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}