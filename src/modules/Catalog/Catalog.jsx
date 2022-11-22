import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import catalogStore from "./store/CatalogStore"
import { Spin } from 'antd';
import React from 'react';
import { CatalogProductCard } from "./components/CatalogProductCard";

export const Catalog = observer(() => {
    const { categories, loadData, loadCategories, categoryIndex, setCategory, products, loadCategory, isProductsLoading, isCategoriesLoading } = catalogStore;

    useEffect(()=>{
        loadCategories();
        loadData()
    }, [])

    useEffect(()=>{
        if(categories){
        loadCategory(categories[categoryIndex]);
        }
    }, [categories, categoryIndex])

    return (
        <div>
            {isCategoriesLoading && <div className="loader">
                                        <Spin />
                                    </div>}
            {!isCategoriesLoading && <div className="container catalog__cantainer">
                <p className="catalog__info">If you have been using the same old Christmas decorations in your Christmas tree for the past 10 years, it may be time to give your decorations a makeover. Here you will find the largest collection with the newest trends! <br/>
                Within our range of Christmas tree pendants you can choose from: wooden Christmas pendants, synthetic Christmas pendants and Christmas pendants made out of fabric. Also check out our beautiful range of porcelain Christmas pendants and polystone Christmas pendants. And while you're here, do not forget your Christmas ornament hooks to ensure that your ornaments are secure in your artificial Christmas tree.</p>
                <div className="category__wrapper">{categories && categories.map((category, index) => 
                <button onClick={()=>{setCategory(index)}} key={index} className="category__btn" >{category}</button>)}</div>                

                {isProductsLoading && <div className="loader">
                                            <Spin />
                                        </div>}

                {!isProductsLoading && products && 
                    <div className="product__cards">
                        {products.map((item, index) => <CatalogProductCard key={index} productCard={item} />)}
                    </div>                
                }
            </div>
            }

        </div>
    );
})