
export default class todo{
    constructor(title, description, dueDate, priority, checked = false){
        this.checked = checked;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

