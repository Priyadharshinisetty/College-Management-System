import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnaviComponent } from './adminnavi/adminnavi.component';
import { AdmissionComponent } from './admission/admission.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { CategoriesComponent } from './categories/categories.component';
import { ComputerscienceComponent } from './computerscience/computerscience.component';
import { ContactComponent } from './contact/contact.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { InformationtechnologyComponent } from './informationtechnology/informationtechnology.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LogincComponent } from './loginc/loginc.component';
import { LoginstaffComponent } from './loginstaff/loginstaff.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { MastheadComponent } from './masthead/masthead.component';
import { MymarksComponent } from './mymarks/mymarks.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';
import { StaffnaviComponent } from './staffnavi/staffnavi.component';
import { StudentComponent } from './student/student.component';
import { StudentmarksComponent } from './studentmarks/studentmarks.component';
import { StudentnaviComponent } from './studentnavi/studentnavi.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { ViewstaffdetailsComponent } from './viewstaffdetails/viewstaffdetails.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewstudentcComponent } from './viewstudentc/viewstudentc.component';
import { ViewstudentdetailsbynoComponent } from './viewstudentdetailsbyno/viewstudentdetailsbyno.component';
import { ViewstudentmarksComponent } from './viewstudentmarks/viewstudentmarks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent } ,
  { path: 'viewstudentc', component: ViewstudentcComponent } ,
  { path: 'viewstudentmarks', component: ViewstudentmarksComponent } ,
  { path: 'viewpayment', component: ViewpaymentComponent } ,
  { path: 'home', component: MastheadComponent } ,
  { path: 'aboutus', component: AboutusComponent } ,
  { path: 'categories', component: CategoriesComponent } ,
  { path: 'contact', component: ContactComponent } ,
  { path: 'computerscience', component: ComputerscienceComponent } ,
  { path: 'informationtechnology', component: InformationtechnologyComponent } ,
  { path: 'ece', component: EceComponent } ,
  { path: 'eee', component: EeeComponent } ,
  { path: 'automobile', component: AutomobileComponent } ,
  { path: 'admission', component: AdmissionComponent } ,
  { path: 'staff', component: StaffComponent } ,
  { path: 'student', component: StudentComponent } ,
  { path: 'viewstaff', component: ViewstaffComponent } ,
  { path: 'viewstudent', component: ViewstudentComponent } ,
  { path: 'viewstudentdetailsbyno', component: ViewstudentdetailsbynoComponent } ,
  { path: 'mymarks', component: MymarksComponent } ,
  { path: 'addstudent', component: AddstudentComponent } ,
  { path: 'addstudentmark', component: StudentmarksComponent } ,
  { path: 'studentnavi', component: StudentnaviComponent } ,
  { path: 'staffnavi', component: StaffnaviComponent } ,
  { path: 'adminnavi', component: AdminnaviComponent } ,
  { path: 'admin', component: AdminComponent } ,
  { path: 'addcourse', component: AddcourseComponent } ,
  { path: 'payment', component: PaymentComponent } ,
  { path: 'viewstaffdetails', component: ViewstaffdetailsComponent } ,
  { path: 'loginc', component: LogincComponent } ,
  { path: 'loginadmin', component: LoginadminComponent } ,
  { path: 'loginstudent', component: LoginstudentComponent } ,
  { path: 'loginstaff', component: LoginstaffComponent } ,
  { path: 'register', component: RegisterComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
