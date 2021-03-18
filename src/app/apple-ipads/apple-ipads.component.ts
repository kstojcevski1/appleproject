import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Clients } from './model';

@Component({
  selector: 'app-apple-ipads',
  templateUrl: './apple-ipads.component.html',
  styleUrls: ['./apple-ipads.component.css']
})
export class AppleIpadsComponent implements OnInit {

  client : Clients[] | undefined;
  clientSubscription : Subscription | undefined;

  constructor(private http : AppService) { }

  ngOnInit(): void {
    // this.getClients();
  }

  // getClients() {
  //   this.clientSubscription = this.http.getPost().subscribe(
  //     (result : any) => {
  //       this.client = result;
  //       console.log(this.client);
  //     }
  //   )
  // }

}
