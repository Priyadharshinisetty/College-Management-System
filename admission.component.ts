import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  admissionForm = new FormGroup(  {firstname: new FormControl(''), lastname: new FormControl('') }  )
  router: any;

  get firstname() {
    return this.admissionForm.get('firstname')
  }
  get lastname() {
    return this.admissionForm.get('lastname')
  }
  constructor(private ps: CollegeService) {
  }
  insertAdmission(insertadmission: any) {
    console.log(insertadmission);
    this.ps.insertAdmission1(insertadmission.value).subscribe(response => {
      alert("Admission Successfull!!");
      this.router.navigate(['home']);
    }, error => alert("Registration not successfull!! Please try again"));



  }
  ngOnInit(): void {
  }

}