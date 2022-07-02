import React, { Component } from 'react'
import axios from 'axios' 

class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: ''
  }

  async componentDidMount() {
    const {pokemonIndex} = this.props.match.params

    //URLs for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon${pokemonIndex}`
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`
  }
  render() {
    return (
      <div>Pokemon</div>
    )
  }
}

export default Pokemon