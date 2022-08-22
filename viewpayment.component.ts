import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {

  constructor(private is:CollegeService) { }
  payment:any=0;
  getById(data:number){
    console.log(data);
    this.is.viewPaymentById(data).subscribe(
      (resp: any) => { this.payment=resp; }
       );
    }

  ngOnInit(): void {
  }

}
