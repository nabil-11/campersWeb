import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-annonce-transporteur',
  templateUrl: './form-annonce-transporteur.component.html',
  styleUrls: ['./form-annonce-transporteur.component.sass']
})
export class FormAnnonceTransporteurComponent implements OnInit {
  i = 1  ;
  toggleSuivant(){
    this.i +=1 ;
    console.log(this.i) ;
  }
  constructor() { 

  }
  

  ngOnInit(): void {
  }

}
