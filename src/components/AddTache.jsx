import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtache } from '../redux/ActionsCreators';

const AddTache = () => {

    const [val, UpdateVal] = useState('');
    const dispatch = useDispatch();

    const add = () => {
        if(val.length===0){
            alert('description vide ...');
            return;
        }
        dispatch(addtache(val));
        document.getElementById('des').value='';
        document.getElementById('des').focus();
    }

    return (
        <div className='add'>
            <input id='des' type="text" value={val} onChange={(e) => UpdateVal(e.target.value)} />
            <button onClick={add}>Ajouter</button>
        </div>
    );
}

export default AddTache;
