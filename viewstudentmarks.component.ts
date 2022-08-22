import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-viewstudentmarks',
  templateUrl: './viewstudentmarks.component.html',
  styleUrls: ['./viewstudentmarks.component.css']
})
export class ViewstudentmarksComponent implements OnInit {

  constructor(private is:CollegeService) { }
  studentmarks:any=0;
  getById(data:number){
    console.log(data);
    this.is.viewStudentmarksById(data).subscribe(
      (resp: any) => { this.studentmarks=resp; }
       );
    }
  ngOnInit(): void {
  }

}
