/* eslint-disable max-len */
import React from "react";

type CircleArrowButtonProps = {
    onClick: React.MouseEventHandler,
    rotateDegrees:number
}

const CircleArrowButton = ({onClick,rotateDegrees}:CircleArrowButtonProps) => {
    return (
        <button 
            style={{
                transform: `rotate(${rotateDegrees}deg)`,
                border: "none",
                background: "none",
                height: "3rem",
                width:"3rem",
            }}
            type="button" 
            onClick={onClick}>
            <div style={{
                height: "100%",
                width:"100%",
            }}>
                <div style={{
                    backgroundImage: 'url("/circle-arrow-icon.svg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "100%",
                    width: "100%",
                }}>
                </div>
            </div>
        </button>
    );
};

export default CircleArrowButton;