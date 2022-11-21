import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

export class ProductStore {
    productData = {};
    isProductLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadProduct = async (productId) => {
        this.isProductLoading = true;
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

            if(response.status >= 400){
                notification.error({
                    message: response.status,
                    description: response.statusText,
                });
                throw new Error(`Response Error: ${response.statusText}`);
            }
            const data = await response.json();
            runInAction(() => {
                this.productData = {...data};
                this.isProductLoading = false;
            })

        } catch (e) {
            //
        } finally {
            //
        }
    }
}
