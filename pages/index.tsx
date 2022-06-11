import type { NextPage } from 'next';
import DimensionalButton from '../components/dimensional-button/DimensionalButton';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.body}>
                <section className={styles.bodyLeft}>
                    <section className={styles.logoContainer}>
                        <Logo height={"100%"} width={"100%"} />
                    </section>
                    <section className={styles.animationContainer}></section>
                </section>
                <section className={styles.bodyRight}>
                    <header className={styles.header}>
                        <div className={styles.socialIcons}>
                            <SocialIcons/>
                        </div>
                        <div className={styles.brand}>
                            <div className={styles.brandText}>
                                <h1 className={styles.name}>Dan Groleau</h1>
                                <p className={styles.occupation}>Software Engineer</p>
                            </div>
                        </div>
                    </header>
                    <section className={styles.carouselContainer}></section>
                </section>
            </section>
            <section className={styles.menu}>
                <DimensionalButton>Projects</DimensionalButton>
                <DimensionalButton>About</DimensionalButton>
                <DimensionalButton>Services</DimensionalButton>
                <DimensionalButton>Blog</DimensionalButton>
            </section>
        </div>
    );
};

export default Home;
