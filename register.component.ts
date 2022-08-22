import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ps:CollegeService, private router:Router) { }

  insertRegister(insertregister:any){
    console.log(insertregister.value);
    this.ps.insertRegister1(insertregister.value).subscribe(response=>{
      
      alert("Registration Successfull!!");
      this.router.navigate(['loginc']);
    },error=>alert("Registration not successfull!! Please try again"));
  }
  ngOnInit(): void {
  
  }

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  

}
