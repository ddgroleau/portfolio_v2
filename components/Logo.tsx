/* eslint-disable max-len */
import React from 'react';

type LogoProps = {
    width:string;
    height:string;
}

const Logo = ({width,height}:LogoProps) => {
    return (
        <div style={{
            height: height,
            width: width
        }}>
            <div style={{
                backgroundImage: 'url("/logo.svg")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "100%",
                width: "100%",
            }}>
            </div>
        </div>
    );
};

export default Logo;