import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductStore } from "./store/ProductStore";
import { Image } from 'antd';
import { Spin } from 'antd';
import React from 'react';
import cartStore from "../../../stores/CartStore";

export const Product = observer(() => {
    const { productId } = useParams();
    const [productStore] = useState(new ProductStore());
    const { productData, isProductLoading, loadProduct } = productStore;
    const { title, imgs, price, description, id } = productData;    
    const {addToCart} = cartStore;

    const handleClick = () => {
        addToCart(productData);
    }

    useEffect(() => {
        if(productId){
            loadProduct(productId);
        }
    }, [])

    return(
        <div className="container">
            {isProductLoading && <div className="loader">
                                    <Spin />
                                </div>}
            {!isProductLoading && <div className="product__wrapper">
                <div className="product__imgs">
                    <Image className="product__img" src={imgs[1]} alt={title} />
                    <Image className="product__img" src={imgs[2]} alt={title} />
                </div>
                <div className="product__info">
                    <h1 className="product__title">{title}</h1>
                    <p className="product__description">{description}</p>
                    <p className="product__description">{price}$</p>
                    <button onClick={(handleClick)} className="product__addBtn">Add to your cart</button>
                </div>
            </div>}
        </div>
    )
})