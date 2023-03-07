import styles from './Footer.module.scss';
import { TfiInstagram, TfiTwitter, TfiFacebook } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

export default function Footer() {
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Projects',
    to: '/projects'
  }, {
    label: 'Contact',
    to: '/contact'
  }];

  return (
    <footer className={styles.footer}>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>Tiago Guapyassu</h1>
            <span className={styles.subtitle}>Software Developer</span>
          </div>

          <ul className={styles.links}>
            {rotas.map((rota, index) => (
              <li key={index} className={styles.link}>
                <Link to={rota.to}>
                  {rota.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/tiago.guapyassu/" target='_blank' className={styles.social} rel="noreferrer">
              <TfiFacebook />
            </a>
            <a href="https://www.instagram.com/tguapyassu/" target='_blank' className={styles.social} rel="noreferrer">
              <TfiInstagram />
            </a>
            <a href="https://twitter.com/TGuapyassu" target='_blank' className={styles.social} rel="noreferrer">
              <TfiTwitter />
            </a>
          </div>
        </div>
        <p className={styles.copy}>&#169; TGuapyassu. All right reserved</p>
      </div>
    </footer>
  );
}