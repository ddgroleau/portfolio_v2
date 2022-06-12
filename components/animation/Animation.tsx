import React from 'react';
import styles from './Animation.module.css';

const Animation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
            <div className={styles.box4}></div>
            <div className={styles.box5}></div>
        </div> 
    );
};

export default Animation;