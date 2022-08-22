import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ps:CollegeService) { 
  }
    insertContact(insertcontact:any){
      console.log("Yor data is ",insertcontact);
      this.ps.insertContact1(insertcontact.value).subscribe(response=>{
        alert("Add Contact Successfull!!");
      },error=>alert("Add Contact not successfull!! Please try again"));
    }

  ngOnInit(): void {
  }

}
