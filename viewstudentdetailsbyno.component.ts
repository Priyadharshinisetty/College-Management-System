import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-viewstudentdetailsbyno',
  templateUrl: './viewstudentdetailsbyno.component.html',
  styleUrls: ['./viewstudentdetailsbyno.component.css']
})
export class ViewstudentdetailsbynoComponent implements OnInit {

  // constructor(private ps:CollegeService) { 
  //   this.viewStudents();
  // }
  // students:any
  // viewStudents(){
  //   this.ps.viewStudents().subscribe((result:any)=>{this.students=result});
  // }

  constructor(private is:CollegeService) { }
  students:any=0;
  getById(data:number){
    console.log(data);
    this.is.viewStudentById(data).subscribe(
      (resp: any) => { this.students=resp; }
       );
    }
  ngOnInit(): void { 
  } 

}
