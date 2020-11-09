import React from "react";
import { connect } from "react-redux";

function Pokemon(props) {
  return (
    <div className="indPoke">
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.sprites.front_default} />
    </div>
  );
}

const mstp = (state) => {
  return {
    pokemon: state.pkr.pokemon
  };
};

export default connect(mstp, {})(Pokemon);
