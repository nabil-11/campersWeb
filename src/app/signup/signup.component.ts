import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {



signupForm !: FormGroup ;
  constructor(private userService:UserService ,private router:Router,private formBuilder:FormBuilder) {}
onSubmit(){ 
 /* this.userService.signUp(this.signupForm.value).subscribe((result: any)=>{
    console.log(result);
  
this.router.navigate(['login']);
  });*/
  this.userService.getinfo().subscribe((result)=>{
    console.log(result);
  })
}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email:[''],
      password:[''],
      role:["CAMPEUR"],
      tel:['12345']
    
    })
  }

}
