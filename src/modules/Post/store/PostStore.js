import { makeAutoObservable } from "mobx";

export class PostStore {

    loading = true;
    post = {};

    constructor(){
        makeAutoObservable(this, undefined, {
            autoBind: true,
        })
    };

    loadPost(id){        
        fetch(`http://localhost:3000/dataBlog/${id}`)
        .then(response => response.json())
        .then(json => {
            this.post = json;
            this.loading = false;
        })
    };
}