import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router , ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  haswebsite:boolean=true;
  updateSite :boolean=false;
  id:any;
Employee={
  id:""
  ,name :"",
username :"",
email :"",
website:"",
phone :""};
  constructor(public employeeSev :EmployeeServiceService ,private _flashMessagesService: FlashMessagesService, 
    public router:Router, public activated  :ActivatedRoute ) { }

  ngOnInit() {
  this.id=this.activated.snapshot.params['id'];
 this.employeeSev.getEmployeeById(this.id).subscribe(Employee=>{
    this.Employee=Employee;
    
    });;
   console.log(this.Employee.id);

}


  
}
