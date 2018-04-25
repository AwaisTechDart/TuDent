import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  show = true;
  constructor() { 
  }

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

  scrolling(){  
    if(this.show == true){
      //For all large cards
      var remPos = $('#card-row').offset().top - $(window).scrollTop();
      if (remPos < 300 || remPos < -250) {
        $('#element1').css('opacity',1).css('transform', 'translateX(0%)');
        $('#element2').css('opacity',1).css('transform', 'translateX(0%)');
        $('#element3').css('opacity',1).css('transform', 'translateX(0%)');
        $('#element4').css('opacity',1).css('transform', 'translateX(0%)');
      }
    }else{
      //For card 2
      var remPos_small2 = $('#card-div-small2').offset().top - $(window).scrollTop();
      if (remPos_small2 < 400 || remPos_small2 < -280) {
        $('#card-div-small2').css('opacity',1).css('transform', 'scale(1)');
      }

      //For card 3
      var remPos_small3 = $('#card-div-small3').offset().top - $(window).scrollTop();
      if (remPos_small3 < 400 || remPos_small3 < -280) {
        $('#card-div-small3').css('opacity',1).css('transform', 'scale(1)');
      }

      //For card 4
      var remPos_small4 = $('#card-div-small4').offset().top - $(window).scrollTop();
      console.log('terms'+remPos_small4);
      if (remPos_small4 < 400 || remPos_small4 < -280) {
        $('#card-div-small4').css('opacity',1).css('transform', 'scale(1)');
      }
    }
  }
}
