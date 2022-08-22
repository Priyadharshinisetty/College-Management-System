import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-studentmarks',
  templateUrl: './studentmarks.component.html',
  styleUrls: ['./studentmarks.component.css']
})
export class StudentmarksComponent implements OnInit {

  constructor(private ps:CollegeService) { }
  insertStudentmark(insertstudentmark:any){
    this.ps.insertStudentmark1(insertstudentmark.value).subscribe(response=>{
      alert("Add Studentmarks Successfull!!");
    },error=>alert("Add Studentmarks not successfull!! Please try again"));
  }

  ngOnInit(): void {
  }

}
