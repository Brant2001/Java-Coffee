const Product = (productObject) => {
    return `
        <section>
            <article>
                <p>${productObject.id}</p>
                <p>Product Name: ${productObject.name}</p>
                <p>Type of Bean: ${productObject.beanType}</p>
                <p>Type of Roast: ${productObject.roastType}</p>
                <p>Price: ${productObject.price}</p>
            </article>
        </section>
    `
}


export default Product