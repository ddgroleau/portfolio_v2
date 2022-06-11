import React from 'react';
import styles from './DimensionalButton.module.css';

const DimensionalButton = ({children}:any) => {
    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <button className={styles.btn}>{children}</button>
            </div>
            <div className={styles.btnShadow}></div>
        </div>
    );
};

export default DimensionalButton;