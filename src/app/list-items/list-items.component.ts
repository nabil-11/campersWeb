import { Component, OnInit } from '@angular/core';
import { MediaService } from '../service/media.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent implements OnInit {
  items :any =[] ;


  constructor(private mediaService :MediaService) { 

    
  }
getAll() {
  return this.mediaService.getAll().subscribe(
    (response)=>{
      console.log(response)
      this.items = response ;
    },(error)=>{
      console.log(error)
    }
  )
}
  ngOnInit(): void {
   this.getAll();

}
}
