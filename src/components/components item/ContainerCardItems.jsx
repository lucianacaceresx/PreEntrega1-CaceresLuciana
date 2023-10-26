
// import fetchSimultion from "../../utils/fetchSimulation";
// import productos from "../../utils/productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../../style/containerCardItem.css"
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'


const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );

    let {idCategory} = useParams()
    
    useEffect(() => {

        setDatos( [] );
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
       
            getDocs(queryCollection)
            .then(resp => 
                {
                    let data
                    data = resp
                    console.log(resp.docs)
                    if(idCategory === undefined){
                        data = resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))

                    } 
                    else {
                        data = resp.docs.map(prod =>( { id: prod.id, ...prod.data() })).filter(filter => filter.type === idCategory )

                    }
                    console.log(data)
                    setDatos(data)
                })
    }, [idCategory])

    return(
        <div className="containerCardItems">
            {
                (datos.length === 0 ) ? <div className="containerSpinner"> <MoonLoader color="	#008080" /> </div>
                : datos.map( product => (
                    <CardItem 
                        key={product.id}
                        id={product.id}
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

export default ContainerCardItems;