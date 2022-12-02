import React from 'react';
import './CarWidget.css'

const CarWidget = ({src,alt}) => {
    return (
       <div>
            <img src={src} alt={alt}/>
            <p>5</p>
       </div>
    );
};

export default CarWidget;



