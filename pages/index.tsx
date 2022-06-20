import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Animation from '../components/animation/Animation';
import Carousel from '../components/carousel/Carousel';
import DimensionalButton from '../components/dimensional-button/DimensionalButton';
import DoubleArrowButton from '../components/DoubleArrowButton';
import EmailIcon from '../components/EmailIcon';
import GitHubIcon from '../components/GitHubIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import Logo from '../components/Logo';
import styles from '../styles/Home.module.css';
import projects from '../projects';
import ProjectCard from '../components/project-card/ProjectCard';
import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Head from 'next/head';

const Home: NextPage = () => {
    const [isMobileToggled, setIsMobileToggled] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    const projectCards = projects.map(project => {
        return <ProjectCard key={projects.indexOf(project)} project={project}/>;
    });

    const menuItems = [
        {text:"About",component:<About/>},
        {text:"Projects",component:<Carousel components={projectCards}/>},
        {text:"Blog",component:<Blog/>}
    ];
    
    const handleClick = (item:any) => {
        setActiveIndex(menuItems.indexOf(item));
        setIsMobileToggled(false);
    };

    const handleOpenMobileFilters = () => {
        setIsAnimated(true);
        setIsMobileToggled(!isMobileToggled);
    };

    return (
        <>      
            <Head>
                <title>Dan Groleau | Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="The professional software engineering portfolio of Dan Groleau." />
            </Head>
            <main>
                <section className={styles.container}>
                    <header className={styles.header}>
                        <div className={styles.logo}>
                            <Logo height={"100%"} width={"100%"}/>
                        </div>
                        <div className={styles.headerContent}>
                            <div className={styles.socialIcons}>
                                <strong>
                                    <Link href="/Dan_Groleau_Resume.pdf" passHref>
                                        <a target="_blank">RESUME</a>
                                    </Link>
                                </strong>
                                <GitHubIcon/>
                                <EmailIcon/>
                                <LinkedInIcon/>
                            </div>
                            <div>
                                <h1>Dan Groleau</h1>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </header>
                    <section className={styles.body}>
                        <Animation/>
                        <div className={styles.carousel}>
                            <p className={styles.carouselTitle}><strong>{menuItems[activeIndex].text}</strong></p>
                            {menuItems[activeIndex].component}
                        </div>
                    </section>
                    <section className={styles.menu}>
                        <div className={styles.mobileMenuToggle}>
                            <DoubleArrowButton 
                                onClick={handleOpenMobileFilters} 
                                rotateDegrees={isMobileToggled ? 90 : -90}/>
                        </div>
                        <div 
                            className={`${isMobileToggled ? styles.menuButtonsOpen : styles.menuButtonsClosed} 
                            ${isAnimated ? styles.slideUp : ''}`}
                            onAnimationEnd={()=>setIsAnimated(false)}
                        >
                            {menuItems.map(item => {
                                return <DimensionalButton 
                                    key={menuItems.indexOf(item)} 
                                    isActive={menuItems.indexOf(item) === activeIndex}
                                    onClick={()=>handleClick(item)}
                                >
                                    {item.text}
                                </DimensionalButton>;
                            })}
                        </div>
                    </section>
                </section>
            </main>
        </>

    );
};

export default Home;
