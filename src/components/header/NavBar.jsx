import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./contextCart";
import React from "react";

const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>
                <nav className="containerItemList">
                    <ItemListContainer
                        itemUno="Analgesico"
                        itemDos="Crema Tópica"
                        itemTres="Perfumería"
                        // itemCuatro="Suplementos"
                    />
                </nav>
                <div className="containerCart">
                    <CartWidget />
                </div>

                <ContainerCart />
            </header>
        </ContextCart>
    );
};

export default NavBar;
