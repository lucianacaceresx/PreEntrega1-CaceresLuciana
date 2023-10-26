import Image from "./image.jsx";
import Description from "./Description";
import "../../style/detailsItem.css";
import ButtonDetalles from "./ButtonDetalles";
// import fetchSimultion from "../../utils/fetchSimulation";
// import productos from "../../utils/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        // fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        // .then(resp => setDatos(resp))
        // .catch(error => console.log(error))

        const db = getFirestore()
        const queryDoc = doc(db, 'products', idItem)
       
        getDoc(queryDoc)
        .then(resp => ( { id: resp.id, ...resp.data() } ) )
        .then(resp => setDatos([resp]))

    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                (datos.length === 0) ? <MoonLoader color="#5b00fb" /> 
                : datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct.firtsImage}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {items.title}
                                    parrafo= {items.description}
                                    cantidad = {items.stock}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
                        
                                    <ButtonDetalles 
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;