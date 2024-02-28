import { Component } from '@angular/core';
import { ToDo } from '../todo';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { GlobalService } from 'src/app/core/global.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  toDo!:ToDo;

  constructor(
    private glovalSvc: GlobalService,
    private toDoSvc: TodoService,
    private router: ActivatedRoute,
    private route: Router) {}

    ngOnInit():void {
      let id:number = this.router.snapshot.params['id'];
      console.log(id);
      this.toDoSvc.getToDoById(id).subscribe({
        next:(res) => {
          this.toDo = res;
          console.debug(res);
        },
        error:(err) => {
          console.error(err);
        }
      });
    }
}
