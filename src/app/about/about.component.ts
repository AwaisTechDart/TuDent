import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit() {
    if(window.innerWidth <= 991){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  smallSize(){
    if(window.innerWidth <= 991){
      this.show = false;
    }else{
      this.show = true;
    }
  }
}
