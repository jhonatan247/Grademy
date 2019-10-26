import { Component, OnInit } from '@angular/core';
import { SpecialistModel } from 'src/app/models/specialist.model';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-home-specialist',
  templateUrl: './home-specialist.component.html',
  styleUrls: ['./home-specialist.component.css']
})
export class HomeSpecialistComponent implements OnInit {

    specialist: SpecialistModel;
    todo: any[];

  constructor() { 
    this.specialist = new SpecialistModel()
  }

  ngOnInit() {
    this.getData()
    this.toDo();
  }

  getData(){
    this.specialist = {
      name:"Camila",
      lastname:"Bernal",
      email:"correo@gmail.com",
      description:"descripcion",
      password:"password",
      career:"Psicología"
    }
  }

  toDo(){
    this.todo=[
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
      { img:"assets/img/kids-draw.jpg"},
    ]


  }


}
