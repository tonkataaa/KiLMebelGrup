import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>       
          <div className={styles.brandSection}>
            <h3 className={styles.logo}>
              КиЛ <span className={styles.accent}>Мебели</span>
            </h3>
            <p className={styles.description}>
              Създаваме премиум мебели, които превръщат къщите в домове.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} />
                <a href="mailto:kilmebeli@abv.bg" className={styles.link}>
                  kilmebeli@abv.bg
                </a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.iconTop} />
                <div className={styles.phoneGroup}>
                  <a href="tel:+359896128787" className={styles.link}>
                    +359 896 12 8787
                  </a>
                  <a href="tel:+359889981458" className={styles.link}>
                    +359 889 98 1458
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <a 
                href="https://www.facebook.com/kenderov?locale=bg_BG" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Facebook className={styles.socialIcon} />
              </a>
              <a 
                href="https://www.instagram.com/kilmebeli/" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Instagram className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>Навигация</h4>
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink}>Начало</a></li>
              <li><a href="#gallery" className={styles.navLink}>Галерия</a></li>
              <li><a href="#contact" className={styles.navLink}>Контакти</a></li>
              <li><a href="#materials" className={styles.navLink}>Материали</a></li>
              <li><a href="#guarantee" className={styles.navLink}>Гаранция</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © 2025 КиЛ Мебели. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}