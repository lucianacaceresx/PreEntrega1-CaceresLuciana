import { useContext } from "react";
// import farmacia from "../../img/farmacia.png"
import { listCartContext } from "../components/components item/providerContextoListCart";
import { controllerShowCart } from "../components/components item/contextCart";

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;
//rfce es para buscar lo de arriba (react funtion component export )
// rafce es si queremos const y rfce si queremos function