import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show = true;
homeRoute = 'home';
  constructor() {
   }

  ngOnInit() {
    console.log(window.innerWidth);
    if(window.innerWidth <= 832){
      this.show = false;
    }
  }

}
