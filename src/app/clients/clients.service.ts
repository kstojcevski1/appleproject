import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from './cliets.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient : HttpClient) { }

  public getClients() : Observable<Clients> {
    return this.httpClient.get<Clients>('https://jsonplaceholder.typicode.com/users');
  }
}
