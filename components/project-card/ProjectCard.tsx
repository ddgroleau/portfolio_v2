import Link from 'next/link';
import React from 'react';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
    project: {
        imagePath:string,
        title:string,
        description:string,
        technologies:string[],
        websiteUri:string,
        githubUri:string
    }
}

const ProjectCard = ({project}:ProjectCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={styles.img} style={{
                    backgroundImage: `url("${project.imagePath}")`
                }}>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.title}>{project.title}</p>
                    <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.metaData}>
                    <div className={styles.tech}>
                        {project.technologies.map(tech => {
                            return <p key={project.technologies.indexOf(tech)}>{tech}</p>;
                        })}
                    </div>
                    <div className={styles.links}>
                        <strong className={styles.explore}>EXPLORE</strong>
                        <ul>
                            {!project.websiteUri ? undefined : <li><Link href={project.websiteUri}>
                                <a target="_blank">Website</a></Link></li>}
                            {!project.githubUri ? undefined : <li><Link  href={project.githubUri}>
                                <a target="_blank">Code</a></Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;