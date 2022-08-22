import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  constructor(private ps:CollegeService, private route:Router) {
   }
   insertLoginAdmin(insert1:any){
    console.log(insert1.value);
    this.ps.insertLoginAdmin1(insert1.value).subscribe(response=>{
       alert("Login Successfull!!");
       sessionStorage.setItem('loggedInUserDetails',JSON.stringify(response))
       console.log(sessionStorage.getItem('loggedInUserDetails'));
      //  console.log(JSON.parse(sessionStorage.getItem('loggedInUserDetails')));      
       this.route.navigate(['adminnavi']);
      
     },error=>alert("Invalid Credentials!! Please try again"));
  }

  ngOnInit(): void {
  }

}
