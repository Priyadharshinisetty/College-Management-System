import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-loginstaff',
  templateUrl: './loginstaff.component.html',
  styleUrls: ['./loginstaff.component.css']
})
export class LoginstaffComponent implements OnInit {
  constructor(private ps:CollegeService, private route:Router) {
  }
  insertLoginStaff(insert1:any){
    console.log(insert1.value);
    this.ps.insertLoginStaff1(insert1.value).subscribe(response=>{
      alert("Login Successfull!!");
      sessionStorage.setItem('loggedInUserDetails',JSON.stringify(response))
      console.log(sessionStorage.getItem('loggedInUserDetails'));
      // console.log(JSON.parse(sessionStorage.getItem('loggedInUserDetails')));      
      this.route.navigate(['staffnavi']);
      
    },error=>alert("Invalid Credentials!! Please try again"));
  }

  ngOnInit(): void {
  }

}


