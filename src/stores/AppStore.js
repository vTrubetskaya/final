import { makeAutoObservable } from "mobx";

class AppStore {
    // методы - это action

    data = [
        {
            id: 1,
            task: "Выучить JS",
            isDone: false,
        },
        {
            id: 2,
            task: "Выучить React",
            isDone: false,
        },
        {
            id: 3,
            task: "Изучить Mobx",
            isDone: false,
        }
    ];

    constructor(){
        makeAutoObservable(this, undefined, {
            autoBind: true,
        })
    };

    toDoDone (todoId) {
        this.data = this.data.map(item => {
            if(item.id === todoId) {
                item.isDone = !item.isDone; // ! - инверсия
            }
            return item;
        })
    };

    onAddToDo (task) {
        this.data.push({
            id: new Date().getMilliseconds(),
            task: task,
            isDone: false,
        })
    };

    onDelToDo (id) {
        this.data = this.data.filter(item => item.id !== id);
    }

    get notDoneTask () {
        let count = 0;
        this.data.forEach(({isDone}) => {
            if(!isDone) {
                count += 1;
            }
        })
        return count;
    }
}

const appStore = new AppStore();
export default appStore;