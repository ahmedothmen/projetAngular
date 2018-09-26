import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  Employee={
    id:""
    ,name :"",
  username :"",
  email :"",
  website:"",
  phone :""};
  employees:any[];
  constructor(public employeeSev :EmployeeServiceService ,public router:Router,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  mySubmit({valid, value}){
  if (valid && value){
 
  this.employeeSev.addEmployee(this.Employee); 
  this._flashMessagesService.show('ajout avec success', { cssClass: 'alert-success', timeout: 3000 });
  this.router.navigate(['addEmploye']) ;  
    
  }

  else {
    this._flashMessagesService.show('echec d ajout  ', { cssClass: 'alert-danger', timeout: 3000 });
  this.router.navigate(['addEmploye']) ;  
  }
}


}
