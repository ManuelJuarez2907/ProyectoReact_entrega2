import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({children}) => {
    
    return (
        <h2 className='greeting'>{children}</h2>
    );
};

export default ItemListContainer;
