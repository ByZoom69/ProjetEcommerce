import React, {useEffect, useState} from "react";
import "../../css/product/product.css"

const Product = ({ product }) => {
    return(
        <div class="card">
            <img className="imgProduct" src={product.img} alt="DESIRE"/>
            <h1>{product.name}</h1>
            <p class="price">{product.price}</p>
            <p>{product.description}</p>
            <p><button >Add to Cart</button></p>
        </div>
    );
}

export default Product;