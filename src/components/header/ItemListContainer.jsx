import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
    return (
      <ul>
        <li>
          <Link to="category/Analgesico">
            {props.itemUno}
          </Link>
        </li>
        <li>
          <Link to="category/Crema Tópica">
            {props.itemDos}
          </Link>
        </li>
        <li>
          <Link to="category/Perfumería">
            {props.itemTres}
          </Link>
        </li>
        {/* <li>
          <Link to="category/Suplementos">
            {props.itemCuatro}
          </Link>
        </li> */}
      </ul>
    );
  };
  
  export default ItemListContainer;


