import { useEffect, useState } from "react";
import {traerProds} from "../../funciones/funciones";
// import '../../productos/productos'
import '../ItemDetailContainer/ItemDetailContainer.css'
import '../ItemList/ItemList.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [item,setItem] = useState(null)
    const {detalleId} = useParams()

    const filtrarProd = (productos, id) => productos.find((itemP) => itemP.id === id);

    const getItem = async (id, setState)=>{
        try{
            const esperarProductos = await traerProds;
            setTimeout(()=>{
                setState(filtrarProd(esperarProductos, id))
            },2000)
            
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem(Number(detalleId),setItem)
    },[detalleId])

    return(
        <div className="container-itemDetail">
            {item ? 
            
            <ItemDetail item={item}/>  
            : 
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
        </div>
    )
}

export default ItemDetailContainer