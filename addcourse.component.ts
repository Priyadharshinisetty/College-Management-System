import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor( private ps:CollegeService) { }
  
  insertAddcourse(insertaddcourse:any){
   this.ps.insertAddcourse1(insertaddcourse.value).subscribe(response=>{
    alert("Add Course Successfull!!");
  },error=>alert("Add Course not successfull!! Please try again"));
  }

  ngOnInit(): void {
  }

}
 