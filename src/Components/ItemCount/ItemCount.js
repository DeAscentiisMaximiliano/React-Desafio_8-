import { useState } from "react"
import '../ItemCount/ItemCount.css'

function ItemCount({initial,stock,onAdd,talle}){

    const [valor,setValor] = useState(initial)

    const añadirProducto=(num)=>{
        setValor((num) + valor)
    }

    return( 
        <div className="info-container-button">
            <div>
                <button onClick={()=> añadirProducto(-1)} disabled={initial === valor} className="button button-menos">-</button>
                <p>{valor}</p>
                <button onClick={()=> añadirProducto(1)} disabled={stock === valor} className="button button-mas">+</button>
            </div>
            <button onClick={()=> onAdd(valor)} disabled={talle === null} className="button-agregar">Agregar al carrito</button>
        </div>
        )
}

export default ItemCount
