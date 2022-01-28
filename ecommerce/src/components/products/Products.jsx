import React, {useState} from "react";
import Product from "../product/Product";
import "../../logo.svg";

import { Grid } from "@material-ui/core";

const products = [
    { id: 1, name: "DESIRE1", price:"17", description:"tezgzgegegezgegerk", img:"img/desire.jpg"},
    { id: 2, name: "DESIRE2", price:"67", description:"zgegezgegezgezgezg", img:"img/desire.jpg"},
    { id: 3, name: "DESIRE3", price:"600", description:"egzegzgzeg", img:"img/desire.jpg"},
    { id: 4, name: "DESIRE4", price:"12", description:"ezvzzegrggzegzeg", img:"img/desire.jpg"},
];

const Products = () => {
    return (
    <main>
        <Grid className="List_product" container justifyContent="center">
            {products.map((product) => (
                <Grid item key={product.id}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}


export default Products;