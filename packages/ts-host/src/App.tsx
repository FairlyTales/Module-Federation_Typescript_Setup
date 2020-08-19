import React from "react";
import ReactDOM from "react-dom";

import getList from "tsremote-mf/pokemonList";
import PokemonListView from "tsremote-mf/PokemonListView";
import "./index.css";

const PokemonComp = PokemonListView;

const getPokemonList = getList;
const App = () => (
  <div>
    <h1>TS-HOST</h1>
    <PokemonComp list={getPokemonList("Bulb")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
