import React from 'react';
import { Children } from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="bg-green-800 btn font-bold" style={{borderTopLeftRadius:0, borderTopRightRadius:'20px',borderBottomRightRadius:'0', borderBottomLeftRadius:'20px'}}>{children}</button>
        </div>
    );
};

export default Button;