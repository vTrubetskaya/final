import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore {
    categories = undefined;
    categoryIndex = 0;
    products = undefined;
    isProductsLoading = false;
    isCategoriesLoading = false;

    constructor(){
        makeAutoObservable(this);
    };

    setCategory = (index) => {
        this.categoryIndex = index;
    }

    loadCategory = async(category) => {
        this.isProductsLoading = true;
        const response = await fetch(`http://localhost:3000/category/${category}`);
        const json = await response.json();    

        runInAction(() => {            
            this.products = [...json.products];
            this.isProductsLoading = false;
        });
    }

    loadCategories = async() => {

        this.isCategoriesLoading = true;

        try {
            const response = await fetch('http://localhost:3000/categories');

            if(response.status >= 400){
                throw new Error(`Response Error: ${response.statusText}`)
            }
            const json = await response.json();

            runInAction(() => {            
                this.categories = [...json];
                this.isCategoriesLoading = false;
            });
        } catch(e) {
            console.log(e);
        } finally {
            runInAction(() => {
                this.isCategoriesLoading = false;
            })
        }
    };
}

const catalogStore = new CatalogStore();
export default catalogStore;