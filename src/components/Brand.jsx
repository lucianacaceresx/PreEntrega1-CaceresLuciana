import farmacia from "../../img/farmacia.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={farmacia} alt="Farmacia" title="Farmacia"></img>
        </Link>
    )
}

export default Brand;