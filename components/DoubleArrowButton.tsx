/* eslint-disable max-len */
import React from 'react';

type DoubleArrowProps = {
    onClick: React.MouseEventHandler,
    rotateDegrees:number
}

const DoubleArrowButton = ({onClick,rotateDegrees}:DoubleArrowProps) => {
    return (
        <button 
            style={{
                transform: `rotate(${rotateDegrees}deg)`,
                border: "none",
                background: "none"
            }}
            type="button" 
            onClick={onClick}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.40299 20.8955L17.2388 10.4478L9.40299 0H12.1642L20 10.4478L12.1642 20.8955H9.40299ZM0 20.8955L7.83582 10.4478L0 0H2.76119L10.597 10.4478L2.76119 20.8955H0Z" fill="#45B69C"/>
            </svg>
        </button>
    );
};

export default DoubleArrowButton;