import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  events =["1","2","3"] ;
  constructor() { }

  ngOnInit(): void {
  }

}
