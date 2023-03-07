import styles from './Perfil.module.scss';
import Foto1 from 'Assets/perfil.jpeg';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BiSend } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Perfil = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.social}>
          <div className={styles.link}>
            <a href="https://www.linkedin.com/in/tguapyassu/" target='_blank' rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/TGuapyassu" target='_blank' rel="noreferrer">
              <FiGithub />
            </a>
          </div>
          <img height='280px' alt='Imagem de perfil' src={Foto1}></img>
        </div>

        <div className={styles.data}>
          <h1>Hi, i'Am Tiago Guapyassu</h1>
          <h3>Software Developer</h3>
          <p>
            Estudante de Engenharia da Computação em busca de oportunidades
             para aplicar e aprimorar habilidades em linguagens de programação.
             <br /> <br />
             Computer Engineering student seeking opportunities to apply and enhance programming language skills.
          </p>
          <Link to='/contact'>
            Contact Me <BiSend />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Perfil;