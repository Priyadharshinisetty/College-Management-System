import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private ps:CollegeService) { }
  insertPayment(insertpayment:any){
    this.ps.insertPayment1(insertpayment.value).subscribe(response=>{
      alert("Payment Successfull!!");
    },error=>alert("Payment not successfull!! Please try again"));
  }

  ngOnInit(): void {
  }

}
