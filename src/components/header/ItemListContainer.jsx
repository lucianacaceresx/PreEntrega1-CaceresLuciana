import { Link } from 'react-router-dom';
import { useEffect } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

// const [products, setProducts] = useState([])



const ItemListContainer = (props) => {

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'products', '6UYpzZYHzfpmONykO0xX')
   
    getDoc(queryDoc)
    .then(resp => ({ id: resp.id, ...resp.data() }))
    .then(resp => console.log("el del getDoc; ,", resp))
}, [])

useEffect(()=>{
  const db = getFirestore()
  const queryCollection = collection(db, 'products')
 
  getDocs(queryCollection)
  .then(resp => resp.docs.map(prod =>( { id: prod.id, ...prod.data() })))
  .then(resp => console.log("los getDocs; ,", resp))
}, [])

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


