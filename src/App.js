import React, { useEffect } from "react";
import "./styles.css";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";
import { connect } from "react-redux";
import { getPokemon } from "./store/actions";
import { Link, Route } from "react-router-dom";
function App(props) {
  // console.log("PROPS IN APP", props);

  useEffect(() => {
    props.getPokemon("https://pokeapi.co/api/v2/pokemon/");
  }, []);
  return (
    <div className="App">
      <h1>Pokemon with Redux </h1>
      <Link to="/">Home</Link>
      <Route exact path="/">
        <PokeList />
      </Route>
      <Route exact path={`/${props.pokemon.name}`}>
        <Pokemon />
      </Route>
    </div>
  );
}

const mstp = (state) => {
  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokemon: state.pkr.pokemon
  };
};

export default connect(mstp, { getPokemon })(App);
