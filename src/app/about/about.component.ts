import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

  smallSize(){
  }

  scrolling(){
    //For card 1
    var remPos_small1 = $('#element1').offset().top - $(window).scrollTop();
    if (remPos_small1 < 600 || remPos_small1 < -280) {
      $('#element1').css('opacity',1).css('transform', 'scale(1)');
    }
    //For card 2
    var remPos_small2 = $('#element2').offset().top - $(window).scrollTop();
    if (remPos_small2 < 600 || remPos_small2 < -280) {
      $('#element2').css('opacity',1).css('transform', 'scale(1)');
    }

    //For card 3
    var remPos_small3 = $('#element3').offset().top - $(window).scrollTop();
    if (remPos_small3 < 600 || remPos_small3 < -280) {
      $('#element3').css('opacity',1).css('transform', 'scale(1)');
    }

    //For card 4
    var remPos_small4 = $('#element4').offset().top - $(window).scrollTop();
    console.log('terms'+remPos_small4);
    if (remPos_small4 < 600 || remPos_small4 < -280) {
      $('#element4').css('opacity',1).css('transform', 'scale(1)');
    }
  }
}
