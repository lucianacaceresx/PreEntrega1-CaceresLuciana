import logo from "../../img/logo.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={logo} alt="Tienda Hard" title="Tienda Hard"></img>
        </Link>
    )
}

export default Brand;