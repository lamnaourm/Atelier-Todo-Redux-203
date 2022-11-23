import React from 'react';
import { useSelector } from 'react-redux';
import Tache from './Tache';

const ListTaches = () => {

    const taches = useSelector(state => state.tasks);

    return (
        <div className='list'>
            {taches.map(item => <Tache key={item.id} tache={item}/>)}        
        </div>
    );
}

export default ListTaches;
