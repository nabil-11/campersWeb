import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

url ="https://jsonplaceholder.typicode.com/albums"
  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(this.url) ;
  }
}
