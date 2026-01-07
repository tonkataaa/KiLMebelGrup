import React from 'react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import styles from '../styles/Categories.module.css';

export function Categories() {
  const categories = [
    {
      title: "Кухни",
      image: "https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MzcwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Спални",
      image: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NzM0OTM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Други",
      image: "https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY3NDM1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Категории</h2>
          <p className={styles.subtitle}>
            Вижте кое ви интересува
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3 className={styles.categoryName}>{category.title}</h3>
                <div className={styles.accentLine}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}