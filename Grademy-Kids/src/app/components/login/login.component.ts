import { Component, OnInit } from '@angular/core';
import { KidModel } from 'src/app/models/kid.model';
import { ParentModel } from 'src/app/models/parent.model';
import { SpecialistModel } from 'src/app/models/specialist.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kid: KidModel;

 


  constructor(private router:Router) { 
    this.kid = new KidModel();

 
  }

  ngOnInit() {
  }

  onSubmitKid(form: NgForm){
    console.log(this.kid);
    console.log(form);
    
    this.router.navigate(['drawing']);
  };


 

  parents(){
    
  }

}
