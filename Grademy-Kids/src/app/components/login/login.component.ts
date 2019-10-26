import { Component, OnInit } from '@angular/core';
import { KidModel } from 'src/app/models/kid.model';
import { ParentModel } from 'src/app/models/parent.model';
import { SpecialistModel } from 'src/app/models/specialist.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kid: KidModel;
  parent: ParentModel;
  specialist: SpecialistModel;
  iskid: boolean;
  isparent: boolean;
  isspecialist: boolean;


  constructor() { 
    this.kid = new KidModel();
    this.parent = new ParentModel();
    this.specialist = new SpecialistModel();
    this.iskid = true;
    this.isparent = false;
    this.isspecialist = false;

  }

  ngOnInit() {
  }

  onSubmitKid(form: NgForm){
    console.log(this.kid);
    console.log(form);
    
    
  }

  onSubmitparent(form: NgForm){
    console.log(this.parent);
    

  }
  onSubmitspecialist(form: NgForm){
    console.log(this.specialist)
  }

}
