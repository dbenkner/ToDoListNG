import { Time } from "@angular/common";
import { ToDoItems } from "../todoitems/todoitems";

export class ToDo {
    id:number = 0;
    name:string = "";
    description?:string;
    dateStarted: Number|Date = Date.now();
    dateComleted?:Date;
    isComplete:Boolean = false;
    priority: number = 2;
    userId: number = 0;
    items?:ToDoItems[] = [];
}