
import { productList } from '../productos/productos'

const traerProds = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(productList),2000)
})


export {traerProds}

