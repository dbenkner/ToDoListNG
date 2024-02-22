import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
import { GlobalService } from '../core/global.service';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  get url() {return `${this.globalSvc.config.baseurl}/todo`;}
  constructor(private http: HttpClient, private globalSvc: GlobalService){}

  getToDosByUserId(id:number):Observable<ToDo[]> {
    return this.http.get(`${this.url}/u/${id}`) as Observable<ToDo[]>
  }
}
