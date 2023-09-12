import { Link } from 'react-router-dom';
const itemList = [
  { id: 1, title: 'Item 1', description: 'Descripción del Item 1' },
  { id: 2, title: 'Item 2', description: 'Descripción del Item 2' },
  { id: 3, title: 'Item 3', description: 'Descripción del Item 3' },

];

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/Antiinflamatorios">
          {props.itemUno}
        </Link>
      </li>
      <li>
        <Link to="category/Perfumeria">
          {props.itemDos}
        </Link>
      </li>
      <li>
        <Link to="Tafirol">
          {props.itemTres}
        </Link>
      </li>
      <li>
        <Link to="cremas tópicas">
          {props.itemCuatro}
        </Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;

