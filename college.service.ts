import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  url1 = "http://localhost:8080/insertContact"
  url2 = "http://localhost:8080/insertLogin1"
  url3 = "http://localhost:8080/loginadmin"
  url4 = "http://localhost:8080/loginstaff"
  url5 = "http://localhost:8080/loginstudent"
  url6 = "http://localhost:8080/insertPayment"
  url7 = "http://localhost:8080/insertStudentmark"
  url8 = "http://localhost:8080/insertRegister"
  url9 = "http://localhost:8080/insertAdmission"
  url10 = "http://localhost:8080/insertAddstudent"
  url11 = "http://localhost:8080/insertAddcourse"
  url12 = "http://localhost:8080/viewStudents"
  url13 = "http://localhost:8080/viewStudentById"
  url14 = "http://localhost:8080/viewStaffs"
  url15 = "http://localhost:8080/viewStudentmarksById"
  url16 = "http://localhost:8080/viewPaymentById"
  constructor(private h1: HttpClient) {

  }
  viewPaymentById(d: number) {

    console.log("Sevice", d);

    return this.h1.post(this.url16, d);
  }
  viewStudentById(d: number) {

    console.log("Sevice", d);

    return this.h1.post(this.url13, d);
  }

  viewStudentmarksById(d: number) {

    console.log("Sevice", d);

    return this.h1.post(this.url15, d);
  }


  insertContact1(data: any) {
    console.log(data);
    return this.h1.post(this.url1, data); //post belonging to httpclient

  }
  insertLogin1(data: any) {
    return this.h1.post(this.url2, data); //post belonging to httpclient

  }

  insertLoginAdmin1(data: any) {
    return this.h1.post(this.url3, data); //post belonging to httpclient

  }
  insertLoginStaff1(data: any) {
    return this.h1.post(this.url4, data); //post belonging to httpclient
  }
  insertLoginStudent1(data: any) {
    return this.h1.post(this.url5, data); //post belonging to httpclient

  }

  insertPayment1(data: any) {
    return this.h1.post(this.url6, data); //post belonging to httpclient
  }

  insertStudentmark1(data: any) {
    return this.h1.post(this.url7, data); //post belonging to httpclient
  }
  insertRegister1(data: any) {
    return this.h1.post(this.url8, data); //post belonging to httpclient
  }
  insertAdmission1(data: any) {
    return this.h1.post(this.url9, data); //post belonging to httpclient
  }

  insertAddstudent1(data: any) {
    console.log(data);
    return this.h1.post(this.url10, data); //post belonging to httpclient
  }

  insertAddcourse1(data: any) {
    return this.h1.post(this.url11, data); //post belonging to httpclient
  }

  viewStudents() {
    return this.h1.get(this.url12);
  }
  viewStudentmarks() {
    return this.h1.get(this.url13);
  }
  viewStaffs() {
    return this.h1.get(this.url14);
  }
}
