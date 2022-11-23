import React from 'react';
import { useSelector } from 'react-redux';

const Statistiques = () => {

    const taches = useSelector(state => state.tasks); 
    const nbTotal = taches.length;
    const nbComplete = taches.filter(item => item.completed).length;
    
    return (
        <div className='statistiques'>
            <h2>Nombre Totale des taches : {nbTotal}</h2>
            <h2>Nombre en cours : {nbTotal-nbComplete}</h2>
            <h2>Nombre terminees : {nbComplete}</h2>
        </div>
    );
}

export default Statistiques;
