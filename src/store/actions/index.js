// https://pokeapi.co/api/v2/pokemon/
import axios from "axios";
export const getPokemon = (url) => {
  return (dispatch) => {
    dispatch({ type: "LOAD_START" });
    axios
      .get(url)
      .then((resp) => {
        dispatch({ type: "LOAD_SUCC", payload: resp.data });
      })
      .catch((error) => {
        dispatch({ type: "LOAD_ERR", payload: error });
      });
  };
};

export const getIndPokemon = (name) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_IND_START" });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch({ type: "FETCH_IND_SUCC", payload: resp.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_IND_ERR", payload: error });
      });
  };
};
