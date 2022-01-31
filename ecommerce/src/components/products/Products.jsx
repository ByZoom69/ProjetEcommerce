import React from "react";
import Product from "././product/Product";
import { Grid } from "@material-ui/core";

import useStyles from './styles';

const products = [
    { id: 1, name: "DESIRE1", price:"17", description:"tezgzgegegezgegerk", image:"https://static1.puretrend.com/articles/6/17/08/36/@/1867087-lupita-nyong-o-egerie-lancome-624x600-1.jpg"},
    { id: 2, name: "DESIRE2", price:"67", description:"zgegezgegezgezgezg", image:"https://static1.puretrend.com/articles/6/17/08/36/@/1867087-lupita-nyong-o-egerie-lancome-624x600-1.jpg"},
    { id: 3, name: "DESIRE3", price:"600", description:"egzegzgzeg", image:"https://static1.puretrend.com/articles/6/17/08/36/@/1867087-lupita-nyong-o-egerie-lancome-624x600-1.jpg"},
    { id: 4, name: "DESIRE4", price:"12", description:"ezvzzegrggzegzeg", image:"https://static1.puretrend.com/articles/6/17/08/36/@/1867087-lupita-nyong-o-egerie-lancome-624x600-1.jpg"},
];

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}


export default Products;