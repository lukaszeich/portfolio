import React from 'react';

const Button = ({text, equal, setValue, type}) => {
    
        if (equal) {
            return <div className='btn equal' onClick={() => setValue(text,type)}>{text}</div>
        } else {
            return <div className='btn' onClick={() => setValue(text,type)}>{text}</div>
        }
        
}

export default Button;