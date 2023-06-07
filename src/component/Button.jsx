import React from 'react';
import { Children } from 'react';

const Button = ({children, color}) => {
    const buttonStyle = {
        border: 'none',
        borderTopLeftRadius: 0,
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '20px',
        backgroundColor: color, // Set the background color based on the "color" prop
      };
    return (
        <div>
             <button className="btn font-bold px-10" style={buttonStyle}>
        {children}
      </button>
        </div>
    );
};

export default Button;