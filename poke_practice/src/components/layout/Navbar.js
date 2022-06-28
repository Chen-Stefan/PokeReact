import React, { Component } from "react";
import styled from 'styled-components'


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a> Pokedex </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
