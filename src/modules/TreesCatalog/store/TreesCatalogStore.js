import { makeAutoObservable, runInAction } from "mobx";

class TreesCatalogStore {
    products = undefined;
    isProductsLoading = false;

    constructor(){
        makeAutoObservable(this);
    };
    
    loadData = async () => {
        const response = await fetch(`http://localhost:3000/trees`);
        const json = await response.json();
        runInAction(() => {            
            this.products = [...json];
            this.isProductsLoading = false;
        });        
    }
}

const treesCatalogStore = new TreesCatalogStore();
export default treesCatalogStore;