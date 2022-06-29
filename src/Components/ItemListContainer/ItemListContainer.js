
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({greetings})=>{  

    return(
        <div className='contenedor-itemList'>
            
            <h2 className='item'>{greetings}</h2> 
            <ItemList/>
            
        </div>
    )
}

export default ItemListContainer;
