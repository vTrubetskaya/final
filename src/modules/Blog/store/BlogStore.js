import { makeAutoObservable } from "mobx";

class BlogStore {

    posts = [];
    loading = true;

    constructor(){
        makeAutoObservable(this, undefined, {
            autoBind: true,
        })
    };

    loadPosts(){        
        fetch(`http://localhost:3000/dataBlog`)
        .then(response => response.json())
        .then(json => {
            this.posts = json;
            this.loading = false;
        })
    }
}

const blogStore = new BlogStore();
export default blogStore;