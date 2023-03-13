import styles from './Project.module.scss';

const Projects = () => {

    const Dados1 = [{
        title: "Calculadora",
        desc: "Calculadora simples feita em React com TypeScript",
        photo: "Assets/calculator.png",
        link1: "https://tguapyassu.github.io/calculator/",
        link2: "https://github.com/TGuapyassu/calculator"
    },
    {
        title: "Landing Page",
        desc: "Landing Page sobre um portal de noticias sobre skate feita em React",
        photo: "Assets/skate.png",
        link1: "https://tguapyassu.github.io/skate/",
        link2: "https://github.com/TGuapyassu/skate"
    }]

    const Dados2 = [{
        title: "Game Zumbi",
        desc: "Jogo de Sobrevivência com zumbis feito na Unity",
        photo: "Assets/ZumbiGame.png",
        NameButton: "Demo",
        link: "https://tguapyassu.itch.io/sobrevivencia"
    },
    {
        title: "Assistente Virtual",
        desc: "Assitente Virtual com alguns comandos basicos feito em Python",
        photo: "Assets/Assistente.png",
        NameButton: "Code",
        link: "https://github.com/TGuapyassu/AssistenteVirtual"
    },
    {
        title: "Flappy Bird",
        desc: "Clone do jogo Flappy Bird com Inteligência Artificial Integrada",
        photo: "Assets/FlappyBird.png",
        NameButton: "Code",
        link: "https://github.com/TGuapyassu/FlappyBird"
    }]

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projects</h2>
            <span className={styles.subtitle}>Most recent work</span>

            <div className={styles.container}>
                <ul className={styles.list}>
                    {Dados1.map((projet, index) => (
                        <li key={index}>
                            <div className={styles.post}>
                                <img height={"120px"}
                                    src={projet.photo}
                                    alt='imagem do projeto'
                                />
                                <h2 className={styles.title_project}>{projet.title}</h2>
                                <p className={styles.desc_project}>{projet.desc}</p>
                                <div className={styles.class_button}>
                                    <a className={styles.button}
                                        href={projet.link1}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                    <a className={styles.button}
                                        href={projet.link2}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                    {Dados2.map((projet, index) => (
                        <li key={index}>
                            <div className={styles.post}>
                                <img height={"120px"}
                                    src={projet.photo}
                                    alt='imagem do projeto'
                                />
                                <h2 className={styles.title_project}>{projet.title}</h2>
                                <p className={styles.desc_project}>{projet.desc}</p>
                                <div className={styles.class_button}>
                                    <a className={styles.button}
                                        href={projet.link}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        {projet.NameButton}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects