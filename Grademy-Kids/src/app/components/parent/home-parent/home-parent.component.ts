import { Component,Input, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/js/canvasjs.min';
import { ParentModel } from 'src/app/models/parent.model';
import { KidModel } from 'src/app/models/kid.model';






@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

	parent: ParentModel;
	kid_images: string[];
	analisis: string[];
	activity: any[];



  constructor() { }

	ngOnInit() {

		this.parent = new ParentModel();
		this.getData()

		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,		
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Motivación" },
				{ y: 55, label: "Motivación-prom" },
				// { y: 50, label: "Orange" },
				// { y: 65, label: "Banana" },
				{ y: 28, label: "Esfuerzo" },
				{ y: 34, label: "esfuerzo-prom" }

			]
		}]
	});
		
	chart.render();
	}
	
	getData(){
		this.parent=
		{
			name:"Camila",
			email:"camila@correo.com",
			lastname: "Torres",
			password: "..."
		}
		this.kid_images=[
			"assets/img/kids-draw.jpg",
			"assets/img/kids-draw.jpg",
			"assets/img/kids-draw.jpg",
			"assets/img/kids-draw.jpg",
			"assets/img/kids-draw.jpg",
			"assets/img/kids-draw.jpg",
		]
		this.activity=[
			{
				specialist: "assets/img/psychologist.jpg",
				description: "lorem	lorem lorem	",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "lorem	lorem lorem	",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "lorem	lorem lorem	",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "lorem	lorem lorem	",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "lorem	lorem lorem	",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},

		]

		this.analisis=[
			"lorem	lorem lreo lorem lorem ",
			"lorem	lorem lreo lorem lorem ",
			"lorem	lorem lreo lorem lorem ",
		]
		}


	}

