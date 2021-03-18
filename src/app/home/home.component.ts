import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private path : Router) {}

  ngOnInit(): void {
  }
  modelIphones() {
    this.path.navigate(['apple-phones']);
  }
  modelMacbook() {
    this.path.navigate(['apple-laptops']);
  }
  modelIpads() {
    this.path.navigate(['app-clients']);
  }
}

