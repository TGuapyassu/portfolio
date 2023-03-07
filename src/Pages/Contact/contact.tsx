import styles from './Contact.module.scss';
import { BsTelephone, BsMailbox } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>
      <span className={styles.subtitle}>Get in touch</span>

      <div className={styles.container}>
        <div className={styles.information}>
          <BsTelephone />

          <div>
            <h3 className={styles.titles}>Call Me</h3>
            <span className={styles.subtitles}>(21) 99691-4666</span>
          </div>
        </div>

        <div className={styles.information}>
          <BsMailbox />

          <div>
            <h3 className={styles.titles}>E-Mail</h3>
            <span className={styles.subtitles}>tiago_guapyassu@hotmail.com</span>
          </div>
        </div>

        <div className={styles.information}>
          <BiCurrentLocation />

          <div>
            <h3 className={styles.titles}>Location</h3>
            <span className={styles.subtitles}>Rio De Janeiro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;