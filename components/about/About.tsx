import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>I am a full-stack software engineer with an extensive background in web development.</h2>
                <p>
                    <strong>Programming is my passion. </strong>
                    I taught myself how to code while working in a business operations role,
                    and now I enjoy teaching other what I have learned.
                </p>
                <p>
                    I've worked on numerous enterprise-level projects, and have led engineering teams
                    to develop highly-scalable, responsive and performant applications.
                </p>
                <p>
                   I also earned an MBA with a concentration in Business Analytics while working full-time and
                   learning to code. I am a US Army veteran and a lifelong student of computer science.
                </p>
            </div>
        </div>
    );
};

export default About;