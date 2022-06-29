import { Link } from "react-router-dom";
import '../Brand/Brand.css'

function Brand(){
    return(
        <div className="brand-logo">
            <Link to='/'><img src="https://i.ibb.co/KxcCC11/Coder-sport.png" className="img-itemContainer" /></Link>
        </div>
    )
}

export default Brand