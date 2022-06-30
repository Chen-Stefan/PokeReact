import React, { Component } from "react";
import styled from "styled-components";

// Styled image 操作
const Sprite = styled.img`
  width: 8rem;
  height: 8rem
`
class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    // grab the pokemon id from the url
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;

    this.setState({
      // 如果key 和 value是一样的，直接简写成 name, imageUrl, pokemonIndex就行了
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          {/* text-start 是bootstrap把text移到左边的class  */}
          <h5 className="card-header">{this.state.pokemonIndex}</h5>
          <Sprite className="card-img rounded mx-auto mt-2" src={this.state.imageUrl}></Sprite>
          <div className="card-body mx-auto">
            <h6 className="card-title">
              {/* If there is a space between the name, apply camel case */}
              {this.state.name
                .toLowerCase()
                .split(" ")
                .map(
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
