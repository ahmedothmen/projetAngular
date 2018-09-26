import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashbrodComponent } from './components/dashbrod/dashbrod.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidBarComponent } from './components/sid-bar/sid-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule , Routes} from '@angular/router';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpModule } from '@angular/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { StudentsComponent } from './components/students/students.component';
import { AreaComponent } from './components/area/area.component';
import { UsersComponent } from './components/users/users.component';
const  appRoutes : Routes=[
  {path:'',component:DashbrodComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'addEmploye',component:AddEmployeeComponent},
  {path:'Employe/:id',component:EmployeeInfoComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    DashbrodComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidBarComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    StudentsComponent,
    AreaComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
