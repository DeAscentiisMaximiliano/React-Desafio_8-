import {useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


function ItemDetail({item}){
    
    const [valorC,setValorC] = useState(true)
    const [talle,setTalle] = useState(null)
 
    const {addToCart} = useCartContext()

    const onAdd =(valor)=>{
        setValorC(false)
        addToCart({...item, cantidad: valor}) 
        alert(`Se agregaron ${valor} ${item.name} en talle ${talle}`)
    }


    return(
        <div>
            <article className='container-details'>
                <img src={item.img} className="details-img"></img>
                <div className='container-info-details'>
                   <div className='info-name-marca'>
                      <p className='info-marca-details'>{item.marca}</p>
                      <p className='info-name-details'>{item.name}</p>
                   </div>
                   <p className='info-price-details'>{item.price}</p>

                   <p className='info-envio-details'>{item.envio}</p>
                   <p className='info-talle-details'>Elegi tu talle ARG</p>
                   <ul className='item-detalle'>
                       {
                          item.talles.map((item) => {
                            return(
                                <div key={item} className='container-talles'>
                                <input type='radio' name='talle' value={item} className='input' onClick={()=> setTalle(item)}/>
                                <label  className='label' >{item}</label>
                                </div>
                            )
                          })
                       }
                    </ul>
                    {
                        valorC ? 
                        <ItemCount  initial={1} stock={item.stock} onAdd={onAdd} talle={talle} />
                        :
                        <div className='button-cart-container'>
                            <Link to='/cart'><button className='button-cart seguir'>Ir al Carrito</button></Link>
                            <Link to='/'><button className='button-cart '>Seguir comprando</button></Link>
                        </div>
                    }
                </div>
            </article>
        </div>
    )
}

export default ItemDetail