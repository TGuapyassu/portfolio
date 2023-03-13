import styles from './About.module.scss';
import Image from 'Assets/about.png';
import { BsDownload } from 'react-icons/bs';

const Curriculo = [{
  link: "Assets/curriculo.pdf"
}]

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <span>My introduction</span>
      <div>
        <div className={styles.data}>
          <img height="200px" src={Image} alt="" />
          <div className={styles.description}>
            <p>
              Estudante de Engenharia da Computação em busca de oportunidades para aplicar e aprimorar habilidades em linguagens de programação.
              Busco oportunidades de aprendizado e crescimento profissional em uma empresa que valorize inovação e soluções eficientes.
              Acredito que posso ser um valioso recurso para a equipe e contribuir para o sucesso da empresa.
              <br /> <br />
              Computer Engineering student seeking opportunities to apply and enhance programming language skills.
              Seeking learning opportunities and professional growth in a company that values innovation and efficient solutions.
              I believe I can be a valuable asset to the team and contribute to the company's success.
            </p>
            {Curriculo.map((curr, index) => (
              <a key={index} download href={curr.link} target="__blank" className={styles.button}>
                Download CV <BsDownload />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;