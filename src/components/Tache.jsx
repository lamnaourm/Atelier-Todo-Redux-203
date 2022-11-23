import React from "react";

const Tache = (props) => {
  return (
    <div className="tache">
      <h2>
        {props.tache.completed ? (
          <del>{props.tache.task}</del>
        ) : (
          props.tache.task
        )}
      </h2>
      <button>Modifier</button>
      <button>Supprimer</button>
    </div>
  );
};

export default Tache;
