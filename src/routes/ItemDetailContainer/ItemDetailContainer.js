import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Sensoresid = () => {
    const {id} = useParams();
    const [componentes, setComponentes] = useState({});
    useEffect (() => {
        fetch(`https://swapi.dev/api/people${id}`)
            .then(res => res.json())
            .then(setComponentes)
    }, {id});
    return (
        <div>
            Sensores
            id: {componentes?.id}
            Nombre del sensor: {componentes?.name}
            Altura: {componentes?.heigh}
            Masa: {componentes?.mass}
        </div>
    );
};

export default Sensoresid;