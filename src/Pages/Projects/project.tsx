import styles from './Project.module.scss';
import project from 'Data/projects.json';

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projects</h2>
            <span className={styles.subtitle}>Most recent work</span>

            <div className={styles.container}>
                <ul className={styles.list}>
                    {project.map((projet, index) => (
                        <li key={index}>
                            <div className={styles.post}>
                                <img height={"120px"}
                                    src={projet.photo}
                                    alt='imagem do projeto'
                                />
                                <h2 className={styles.title_project}>{projet.title}</h2>
                                <a className={styles.button}
                                    href={projet.link}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects