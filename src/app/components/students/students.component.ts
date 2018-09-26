import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
  })

  export class StudentsComponent implements OnInit {
    nom:string="ahmed";
    prenom : string="ben othmen";
    age:string="25";
 
  ngOnInit() {
    }
  

}