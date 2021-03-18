import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from './model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  // public getClients() : Observable<Clients> {
  //   return this.httpClient.get<Clients>('https://jsonplaceholder.typicode.com/posts');
  }
// }
