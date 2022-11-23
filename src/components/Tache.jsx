import React from "react";
import { useDispatch } from "react-redux";
import { changetache, deletetache } from "../redux/ActionsCreators";

const Tache = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="tache">
      <h2>
        {props.tache.completed ? (
          <del>{props.tache.task}</del>
        ) : (
          props.tache.task
        )}
      </h2>
      <button onClick={() => dispatch(changetache(props.tache.id))}>Modifier</button>
      <button onClick={() => dispatch(deletetache(props.tache.id))}>Supprimer</button>
    </div>
  );
};

export default Tache;
