import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MastheadComponent } from './masthead/masthead.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { AdmissionComponent } from './admission/admission.component';
import { InformationtechnologyComponent } from './informationtechnology/informationtechnology.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewstudentdetailsbynoComponent } from './viewstudentdetailsbyno/viewstudentdetailsbyno.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentmarksComponent } from './studentmarks/studentmarks.component';
import { MymarksComponent } from './mymarks/mymarks.component';
import { StaffnaviComponent } from './staffnavi/staffnavi.component';
import { StudentnaviComponent } from './studentnavi/studentnavi.component';
import { AdminnaviComponent } from './adminnavi/adminnavi.component';
import { PaymentComponent } from './payment/payment.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RegisterComponent } from './register/register.component';
import { ViewstaffdetailsComponent } from './viewstaffdetails/viewstaffdetails.component';
import { LogincComponent } from './loginc/loginc.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginstaffComponent } from './loginstaff/loginstaff.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { ViewstudentcComponent } from './viewstudentc/viewstudentc.component';
import { ViewstudentmarksComponent } from './viewstudentmarks/viewstudentmarks.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    CategoriesComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    ComputerscienceComponent,
    AdmissionComponent,
    InformationtechnologyComponent,
    AutomobileComponent,
    EceComponent,
    EeeComponent,
    StaffComponent,
    StudentComponent,
    AdminComponent,
    ViewstaffComponent,
    ViewstudentComponent,
    ViewstudentdetailsbynoComponent,
    AddstudentComponent,
    StudentmarksComponent,
    MymarksComponent,
    StaffnaviComponent,
    StudentnaviComponent,
    AdminnaviComponent,
    PaymentComponent,
    AddcourseComponent,
    RegisterComponent,
    ViewstaffdetailsComponent,
    LogincComponent,
    LoginadminComponent,
    LoginstaffComponent,
    LoginstudentComponent,
    ViewstudentcComponent,
    ViewstudentmarksComponent,
    ViewpaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
