import { useState, useEffect } from "react"
import CardItem from './CardItem'
import fetchSimultion from "../elementos/fetchSimulation"
import {useParams} from "react-router-dom";



const ContainerCardItems = () => {
    const [datos, setDatos] = useState([])
    const{idCategory} =useParams();

    useEffect(() => {
    if(idCategory == undefined){
    fetchSimultion(productos, 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
    }else {
     fetchSimultion(productos.filter(filter =>filter.type == idCategory), 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
    }
    
}, [])

return(
    <div className="containerCardItems">
        {
            datos.map(product => (
                <CardItem 
                key={product.id}
                imagen={product.imageProduct.firtsImage}
                title={product.title}
                cantidad={product.stock}
                precio={product.price}
                />
            ))
        }

    </div>
)

}