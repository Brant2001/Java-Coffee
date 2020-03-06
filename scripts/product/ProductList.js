import { useProducts } from "./productDataProvider.js";
import Product from "./Product.js";




const contentTarget = document.querySelector(".productList")

const ProductList = () => {

    const productObjectsArray = useProducts();

    for (const productObject of productObjectsArray) {
        contentTarget.innerHTML += Product(productObject)
    }
}


export default ProductList