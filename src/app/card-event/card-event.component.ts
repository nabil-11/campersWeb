import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.sass']
})
export class CardEventComponent implements OnInit {

  constructor() {
     events :["1","2 ","3"] ;
   }

  ngOnInit(): void {
  }

}
