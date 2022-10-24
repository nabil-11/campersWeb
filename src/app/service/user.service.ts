import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../Models/User";
@Injectable({
    providedIn:"root"
})
export class UserService{
    baseUrl:string="http://localhost:8000/campers";

constructor( private  http:HttpClient){

}
getinfo():Observable<any>{
    return this.http.get(this.baseUrl+"/getall")

}
signUp(user:any):any{
    console.log(user)
    return this.http.post<any>(this.baseUrl+"/signup",user);
}

}