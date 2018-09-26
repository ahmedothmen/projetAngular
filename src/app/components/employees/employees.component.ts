import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any[];

  constructor(public employeeSev :EmployeeServiceService ) { 
  
    this.employeeSev.getEmployee().subscribe(employees=>{
      this.employees=employees;
      
      });
    
    }

  ngOnInit() {
  }
getTotalEmployees(){
let total=0;
for (let index = 0; index < this.employees.length; index++) {
  total++;
  
}
return total;

}
}
