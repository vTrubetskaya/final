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

            const response = await fetch(`http://localhost:3000/data/${productId}`);

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
    }
}
