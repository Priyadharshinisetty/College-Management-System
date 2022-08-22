import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private ps:CollegeService ) { }
  
  insertAddstudent(insertaddstudent:any){
    this.ps.insertAddstudent1(insertaddstudent.value).subscribe(response=>{
      alert("Add Student Successfull!!");
    },error=>alert("Add Student not successfull!! Please try again"));
  }

  ngOnInit(): void {
  }

}
