import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import './Employee/Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(public http:Http) { }
  getEmployee(){

    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res=>res.json());
  }
addEmployee (Employee){
  return this.http.post('https://jsonplaceholder.typicode.com/users',Employee).map(res=>res.json());}
  getEmployeeById(id){

    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id).map(res=>res.json());
  }




}
