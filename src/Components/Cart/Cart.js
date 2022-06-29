import { useCartContext } from '../../context/CartContext'
import { TiDeleteOutline } from "react-icons/ti";
import '../Cart/Cart.css'
import { Link } from 'react-router-dom';

function Cart(){

    const {cartList,vaciarCarrito,deleteProdCart,precioTotal} = useCartContext()

    return(
        <div className='cart'>
            <Link to='/' className='home-button'>Volver</Link>
            <p className='text-carrito'>Mi Carrito</p>
            {
                cartList.length ?
                cartList.map(prod => {
                    return(
                        <div className='prod-cart' key={prod.id} >
                            <button onClick={()=> deleteProdCart(prod.id)}  className='delete-button'><TiDeleteOutline/></button>
                            <img src={prod.img}></img>
                            <div className='cart-text'>
                               <p>{prod.name} </p>
                               <p>${prod.price} </p>
                               <p>Cantidad: {prod.cantidad}</p>
                               <p>Total: ${(prod.price * prod.cantidad).toFixed(3)} </p>
                            </div>
                            
                        </div>
                    )
                })
                
                :
                <p>El carrito esta vacio</p>
            }
            {
            precioTotal() ?
            <p>Suma total: ${precioTotal()}</p>:
            <p></p>
            }
            {
                cartList.length ?
                <button onClick={vaciarCarrito} className='button-vaciar'>Vaciar</button>
                :
                <p></p>
                
            }
        </div>
    )
}

export default Cart