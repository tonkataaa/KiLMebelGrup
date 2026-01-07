import { Menu, X } from "lucide-react";
import { Button } from "../components/Button.jsx";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mainNav}>
          <div className={styles.leftSection}>
            <a href="#" className={styles.logoGroup}>
              <h1 className={styles.logoText}>
                КиЛ <span className={styles.logoAccent}>Мебели</span>
              </h1>
            </a>
            
            <nav className={styles.desktopNav}>
              <a href="#" className={styles.navLink}>Начало</a>
              <a href="#gallery" className={styles.navLink}>Галерия</a>
              <a href="#contact" className={styles.navLink}>Контакти</a>
            </nav>
          </div>

          <div className={styles.rightSection}>
            <Button 
              variant="ghost" 
              size="icon" 
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNavLinks}>
              <a href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Начало
              </a>
              <a href="#gallery" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Галерия
              </a>
              <a href="#contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Контакти
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}