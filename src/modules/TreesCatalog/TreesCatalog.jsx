import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Spin } from 'antd';
import React from 'react';
import treesCatalogStore from "./store/TreesCatalogStore";
import { CatalogProductCard } from "../Catalog/components/CatalogProductCard";

export const TreesCatalog = observer(() => {
    const { loadData,  products, isProductsLoading } = treesCatalogStore;

    useEffect(()=>{
        loadData();
    }, [])

    return (
        <div className="container catalog__cantainer">
                <p className="catalog__info">We design our Christmas trees with thoughtful details, prioritizing convenience and longevity for a holiday centerpiece you can enjoy season after season. We’re committed to providing you with the best artificial Christmas trees that suit your style and space with various foliage types, sizes, shapes, and setup options.</p>                

                {isProductsLoading && <div className="loader">
                                            <Spin />
                                        </div>}

                {!isProductsLoading && products && 
                    <div className="product__cards">
                        {products.map((item, index) => <CatalogProductCard key={index} productCard={item} />)}
                    </div>                
                }
            </div>
            

        
    );
})