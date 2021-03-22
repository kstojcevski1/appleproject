import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apple-phones',
  templateUrl: './apple-phones.component.html',
  styleUrls: ['./apple-phones.component.css']
})
export class ApplePhonesComponent implements OnInit {

  constructor( path : Router) {}

  ngOnInit(): void {
  }

  buyThisModel(){
    Swal.fire({
      title: 'Thank you For Your Purchase!',
      text: 'Your iPhone will be Shiped soon.',
      imageUrl: 'https://istore.gt/wp-content/uploads/2020/09/XS.jpg',
      imageWidth: 500,
      imageHeight: 200,

    });

  }
}
