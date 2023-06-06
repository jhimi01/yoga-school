import React from 'react';
import { Children } from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="bg-green-800 btn font-bold">{children}</button>
        </div>
    );
};

export default Button;