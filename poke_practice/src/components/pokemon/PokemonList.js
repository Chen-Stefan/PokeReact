import React, { Component } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'

class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null
  }

  componentDidMount() {
    const res = axios.get(this.state.url)
    // res.data 是API传过来的整个Json数据
    this.setState({pokemon: res.data['results']})
  }
  
  render() {
    return (
      <div className='row'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    )
  }
}

export default PokemonList