import CardItem from "./CardItem";
import fetchSimultion from "../elementos/fetchSimulation";
import productos from "../elementos/productos";
import { useState, useEffect } from "react";
import ContainerCardItems from "../../../style/containerCardItems.css"; 
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

const ContainerCardItems = () => { // Rename the component function
  const [datos, setDatos] = useState([]);
  let { idCategory } = useParams();

  useEffect(() => {
    setDatos([]);

    if (idCategory === undefined) {
      fetchSimultion(productos, 1000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      fetchSimultion(productos.filter((filter) => filter.type === idCategory), 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {datos.length === 0 ? (
        <div className="containerSpinner">
          <MoonLoader color="#5b00fb" />
        </div>
      ) : (
        datos.map((product) => (
          <CardItem
            key={product.id}
            id={product.id}
            imagen={product.imageProduct.firstImage}
            title={product.title}
            cantidad={product.stock}
            precio={product.price}
          />
        ))
      )}
    </div>
  );
};

export default ContainerCardItems;