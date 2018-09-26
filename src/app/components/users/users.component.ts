import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  hob:string="";
  name: String="ahmed";
   email : String="ahmed@esprit.tn";
   adresse: String="bouargoub";
   hobbies: string[]=["Music","Movies","Sprot"];
   delete(index){
    console.log(index);
    this.hobbies.splice(index,1);
   }
   mySubmit(hob){
    this.hobbies.push(this.hob);
   }
  
   constructor() { }

  ngOnInit() {
  }

}
