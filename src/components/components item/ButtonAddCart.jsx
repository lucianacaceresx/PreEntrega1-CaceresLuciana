import { useContext } from "react";
import { listCartContext } from "./providerContextoListCart";

const ButtonAddCart = ( {id, png} ) => {
    
    let { addProduct } = useContext(listCartContext)

    const handlerClick = () => { 
        addProduct(id)
    }
    
    return(
        <button id="addCart" onClick={handlerClick}>
            <img src={png} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;