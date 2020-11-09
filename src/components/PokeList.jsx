import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getIndPokemon } from "../store/actions";

function PokeList(props) {
  // console.log("PROPS IN POKELIST", props);
  return (
    <div className="names">
      PokeList
      {props.isError ? <h1>{props.errorMsg}</h1> : <></>}
      {props.pokeNames &&
        props.pokeNames.map((poke) => {
          return (
            <>
              <Link to={`/${poke.name}`} key={poke.name}>
                <p onClick={() => props.getIndPokemon(poke.name)}>
                  {poke.name}
                </p>
              </Link>
            </>
          );
        })}
    </div>
  );
}
const mstp = (state) => {
  // console.log("MSTP", state)
  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokeNames: state.pkr.pokeNames
  };
};

export default connect(mstp, { getIndPokemon })(PokeList);
