import { memo, useEffect, useState } from "react"
import '../../productos/productos'
import { traerProds } from "../../funciones/funciones"
import Item from "../Item/Item"
import '../ItemList/ItemList.css'
import { useParams } from "react-router-dom"

const ItemList = memo( 
    ()=>{
    const [prods,setProds] = useState([])

    const {categoriaId} = useParams()

    useEffect(()=>{
        if(categoriaId){
            traerProds
            .then((res)=> setProds(res.filter((productos)=> productos.categoria === categoriaId)))
        }else{
            traerProds
            .then((res)=> setProds(res))
        }
        
    },[categoriaId])

    return(
        <div className="contenedor-items">
            {
                prods.length ?  prods.map((producto) => {
                        return(
                            <section key={producto.id}>
                                <Item
                                    pictureUrl={producto.img}                  
                                    marca={producto.marca}
                                    title={producto.name}
                                    price={producto.price}
                                    stock={producto.stock}
                                    id={producto.id}                            
                                />
                            </section>
                        )
                    })
                
                :
                
                <div className="lds-ring"> <div></div> <div></div> <div></div> <div></div>
                    </div> //Loader
                
            }
        </div>
    )
    
}
// (oldProps, newProps) => oldProps.prods.length === newProps.prods.length //Si es false re-render
)
export default ItemList
