import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const ItemListContainer = () => {
    
    const {id} = useParams();
    const [componentes, setComponentes] = useState({});
    useEffect (() => {
        fetch(`https://swapi.dev/api/people`)
            .then(res => res.json())
            .then(setComponentes)
    }, {id});

    return (
        <div>
            <h2>
                <strong>Sensores</strong>
            </h2>
            <ul>
                {componentes.results?.map((componente) => {
                    const id = componente.url.split('/')[5];
                    return(
                        <li>
                            <Link to={`/Sensores/${id}`}>{componente.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ItemListContainer;