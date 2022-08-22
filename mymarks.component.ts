import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-mymarks',
  templateUrl: './mymarks.component.html',
  styleUrls: ['./mymarks.component.css']
})
export class MymarksComponent implements OnInit {

  constructor(private ps:CollegeService) {
    this.viewStudentmarks();
   }
   studentmarks:any
   viewStudentmarks(){
    this.ps.viewStudentmarks().subscribe((result:any)=>{this.studentmarks=result});
  }
  ngOnInit(): void {
  }
 
}
