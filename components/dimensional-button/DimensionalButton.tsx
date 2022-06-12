import React from 'react';
import styles from './DimensionalButton.module.css';

const DimensionalButton = ({children, isActive, onClick}:any) => {
    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={onClick}>{children}</button>
            </div>
            <div className={`${styles.btnShadow} ${isActive ? styles.activeBtn : ''}`}></div>
        </div>
    );
};

export default DimensionalButton;