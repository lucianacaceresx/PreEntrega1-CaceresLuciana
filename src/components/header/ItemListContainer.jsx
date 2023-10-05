import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
    return (
      <ul>
        <li>
          <Link to="category/Antiinflamatorios">
            {props.itemUno}
          </Link>
        </li>
        <li>
          <Link to="category/CremasTópicas">
            {props.itemDos}
          </Link>
        </li>
        <li>
          <Link to="category/Perfumeria">
            {props.itemTres}
          </Link>
        </li>
        <li>
          <Link to="category/Suplementos">
            {props.itemCuatro}
          </Link>
        </li>
      </ul>
    );
  };
  
  export default ItemListContainer;


