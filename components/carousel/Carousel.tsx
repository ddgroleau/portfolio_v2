import React, { useState } from 'react';
import CircleArrowButton from '../CircleArrowButton';
import styles from './Carousel.module.css';

const Carousel = ({components = []}:any) => {
    const [index, setIndex] = useState<number>(0);
    const [isDisabled, setIsDisabled] = useState({left:true,right:false});
    const [animationClass, setAnimationClass] = useState('');
    
    const handleClick = (modifier:number) => {
        setIsDisabled({left:false,right:false});
        setAnimationClass(modifier === 1 ? styles.slideRight : styles.slideLeft);
        if(modifier === 1 && index === components.length-2) {
            setIndex(index + modifier);
            return setIsDisabled({left:false,right:true});
        }
        if(modifier === -1 && index === 1){
            setIndex(index + modifier);
            return setIsDisabled({left:true,right:false});;
        }
        return setIndex(index + modifier);
    };

    return (
        <div className={styles.parentContainer}>
            <div className={styles.btnleft} style={{visibility: isDisabled.left ? "hidden" : "visible"}}>
                <CircleArrowButton onClick={()=>handleClick(-1)} rotateDegrees={180}/>
            </div>
            <div className={styles.container}>
                <div className={styles.components}>
                    <div 
                        key={index} 
                        className={`${styles.component} ${animationClass}`}
                        onAnimationEnd={()=>setAnimationClass('')}>
                        {components[index]}
                    </div>
                </div>
            </div>
            <div className={styles.btnRight} style={{visibility: isDisabled.right ? "hidden" : "visible"}}>
                <CircleArrowButton onClick={()=>handleClick(1)} rotateDegrees={0}/>
            </div>
        </div>
    );
};

export default Carousel;