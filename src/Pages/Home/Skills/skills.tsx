import styles from './Skills.module.scss';
import { FaServer } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';

const Skills = () => {
  const fronts = [{
    name: 'JavaScript',
    number: '100%'
  }, {
    name: 'React',
    number: '100%'
  }, {
    name: 'TypeScript',
    number: '50%'
  }];

  const backs = [{
    name: 'MySql',
    number: '80%'
  }, {
    name: 'Python',
    number: '50%'
  }, {
    name: 'Node.js',
    number: '50%'
  }, {
    name: 'Java',
    number: '50%'
  }];

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <span className={styles.subtitle}>My technical level</span>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <BiCodeCurly />
            <div>
              <h1 className={styles.title__content}>Front-End</h1>
              {/* <span className={styles.subtitle__content}>More than 1 years</span> */}
            </div>
          </div>
          <div className={styles.list}>
            {fronts.map((front, index) => (
              <div key={index}>
                <div className={styles.titles}>
                  <h3 className={styles.name}>{front.name}</h3>
                  <span className={styles.number}>{front.number}</span>
                </div>
                <div className={styles.bar}>
                  <span style={{ width: front.number }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <FaServer />

            <div>
              <h1 className={styles.title__content}>Back-End Developer</h1>
              {/* <span className={styles.subtitle__content}>More than 1 years</span> */}
            </div>
          </div>

          <div className={styles.list}>
            {backs.map((back, index) => (
              <div key={index}>
                <div className={styles.titles}>
                  <h3 className={styles.name}>{back.name}</h3>
                  <span className={styles.number}>{back.number}</span>
                </div>
                <div className={styles.bar}>
                  <span style={{ width: back.number }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;