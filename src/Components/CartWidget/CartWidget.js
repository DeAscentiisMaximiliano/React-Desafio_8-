import {RiShoppingCartFill} from "react-icons/ri"
import '../CartWidget/CartWidget.css'
import { useCartContext } from "../../context/CartContext"

function CartWidget(){

    const {cantidadTotal} = useCartContext()

    return(
        <div className="item-cart-container">
       
        <RiShoppingCartFill className="icon-cart"/>
        {
            cantidadTotal()?
        <p className="number-item">{cantidadTotal()} </p>
        :
        <p></p>
        }    

        </div>
    )
}

export default CartWidget