import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductStore } from "./store/ProductStore";
import { Image } from 'antd';
import { Spin } from 'antd';
import React from 'react';
import cartStore from "../../../stores/CartStore";
import { Rate } from 'antd';

export const Product = observer(() => {
    const { productId } = useParams();
    const [productStore] = useState(new ProductStore());
    const { productData, isProductLoading, loadProduct } = productStore;
    const { title, imgs, price, description, id, rate } = productData;    
    const {addToCart} = cartStore;
    const isproductData = Object.keys(productData).length;

    const handleClick = () => {
        addToCart(productData);
    }

    useEffect(() => {
        if(productId){
            loadProduct(productId);
        }
    }, [loadProduct, productId])

    return(
        <div className="container">
            {isProductLoading && <div className="loader">
                                    <Spin />
                                </div>}
            {!isProductLoading  && isproductData && <div className="product__wrapper">
                <div className="product__imgs">
                    <Image.PreviewGroup>
                        <Image className="product__img" src={imgs[1]} alt={title} />
                        <Image className="product__img" src={imgs[2]} alt={title} />
                    </Image.PreviewGroup>
                </div>
                <div className="product__info">
                    <h1 className="product__title">{title}</h1>
                    <p className="product__description">{description}</p>
                    <Rate disabled defaultValue={rate} />
                    <p className="product__description">{price}$</p>
                    <button onClick={(handleClick)} className="product__addBtn">Add to your cart</button>
                </div>
            </div>}
        </div>
    )
})