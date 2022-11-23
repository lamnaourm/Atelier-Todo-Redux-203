import React from 'react';
import { useDispatch } from 'react-redux';
import { deletealltaches, deletecompletedtaches, deleteuncompletedtaches } from '../redux/ActionsCreators';

const Deletes = () => {

    const dispatch = useDispatch();

    return (
        <div className='suppression'>
            <button onClick={() => dispatch(deletealltaches())}>Supprimer tous</button>
            <button onClick={() => dispatch(deletecompletedtaches())}>Supprimer en cours</button>
            <button onClick={() => dispatch(deleteuncompletedtaches())}>Supprimer terminees</button>
        </div>
    );
}

export default Deletes;
