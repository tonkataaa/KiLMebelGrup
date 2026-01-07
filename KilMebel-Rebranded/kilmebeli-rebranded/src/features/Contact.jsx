import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { toast } from "sonner";
import styles from "../styles/Contact.module.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";


const firebaseConfig = {
  databaseURL: "https://kilmebeli-web-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDb = ref(database, "forms");

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.topic || !formData.message) {
      toast.error("Моля попълнете всички полета!");
      return;
    }

    setIsSubmitting(true);

    try {
      await push(referenceInDb, formData);
      
      toast.success("Запитването е изпратено успешно! Очаквайте отговор!");
      
      setFormData({
        name: "",
        email: "",
        topic: "",
        message: ""
      });
    } catch (error) {
      console.error("Firebase Error:", error);
      toast.error("Грешка при изпращане: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Контакти</h2>
          <p className={styles.subtitle}>
            Свържете се с нас за повече информация или за да получите оферта
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <div className={styles.flexStart}>
                <div className={styles.iconBox}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.infoLabel}>Имейл</h3>
                  <a href="mailto:kilmebeli@abv.bg" className={styles.link}>
                    kilmebeli@abv.bg
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.flexStart}>
                <div className={styles.iconBox}>
                  <Phone className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.infoLabel}>Телефон</h3>
                  <div className={styles.phoneList}>
                    <a href="tel:+359896128787" className={styles.link}>+359 896 12 8787</a>
                    <a href="tel:+359889981458" className={styles.link}>+359 889 98 1458</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.workingHoursCard}>
              <h3 className={styles.hoursTitle}>Работно време</h3>
              <div className={styles.hoursList}>
                <p>Понеделник - Петък: 8:30 - 17:00</p>
                <p>Събота: 8:00 - 14:00</p>
                <p>Неделя: Почивен ден</p>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Пратете запитване</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                type="text"
                name="name"
                placeholder="Име"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input
                type="email"
                name="email"
                placeholder="Имейл"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input
                type="text"
                name="topic"
                placeholder="Тема"
                value={formData.topic}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Textarea
                name="message"
                placeholder="Съобщение"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Изпращане..." : "Изпрати"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}