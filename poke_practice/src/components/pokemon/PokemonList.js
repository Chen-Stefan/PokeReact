import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    // res.data 是API传过来的整个Json数据
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemons...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default PokemonList;
