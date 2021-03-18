import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientsService } from './clients.service';
import { Clients } from './cliets.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private http : ClientsService) { }

  clients : Clients[] | undefined;
  clientSubscription : Subscription | undefined;

  ngOnInit(): void {
    this.getClients();
  }

  getClients() : void {
    this.clientSubscription = this.http.getClients().subscribe(
      (result : any) => {
        this.clients = result;
        console.log(this.clients);
      }
    )
  }

  ngOnDestroy() : void {
    // this.clientSubscription.unsubscribe();
  }

}
