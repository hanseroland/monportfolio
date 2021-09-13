import React from 'react';
import './Button.css';
const STYLE = ['btn--primary','btn--outline', 'btn--outline--yellow'];

const SIZES = ['btn--medium', 'btn--large', 'btn--large--y', 'btn--medium--y' ];

export const Button  = ({
    children, 
    onClick,
    type,
    buttonStyle,
    buttonSize,
})=> {
 const checkButtonStyle = STYLE.includes(buttonStyle) 
 ? buttonStyle
 : STYLE[0];

 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

 return (
     <div  className='btn-mobile' >
            <button
                className={`btn  ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
               {children}
            </button>
     </div>
 )

};