import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import Brand from './Brand';
const NavBar = () => {

  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="containerItemList">
        <ItemListContainer
          itemUno="AntiInflamatorio"
          itemDos="Cremas Tópicas"
          itemTres="Perfumeria"
          itemCuatro="Suplementos"
        />
      </nav>
      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
