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
		this.getData()
		var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,	
			axisY: {

				titleFontColor: "#464990",
				lineColor: "#464990",
				labelFontColor: "#464990",
				tickColor: "#464990"
			},
			axisY2: {
				titleFontColor: "#542E78",
				lineColor: "#542E78",
				labelFontColor: "#542E78",
				tickColor: "#542E78"
			},	
			
			legend: {
				cursor:"pointer",
				itemclick: toggleDataSeries
			},
			data: [{
				type: "column",
				legendText: `${ this.parent.name}`,
				showInLegend: true, 
				dataPoints:[
					{ label: `motivación-Artes`, y: 266.21 },
					{ label: "Talento-Artes", y: 302.25 },
					{ label: `motivación-Ingeniería`, y: 266.21 },
					{ label: "Talento-Ingeniería", y: 302.25 },

				]
			},
			{
				type: "column",	
				legendText: " Promedio",
				axisYType: "secondary",
				showInLegend: true,
				dataPoints:[
					{ label: "motivación-Artes", y: 10.46 },
					{ label: "", y: 2.27 },
					{ label: "motivación-Ingeniería", y: 10.46 },
					{ label: "", y: 2.27 },

				]
			}]
		});
		chart.render();
		
		function toggleDataSeries(e) {
			
			chart.render();
		}
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
				description: "Estudio Completado",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "Estudio Completado",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "Estudio Completado",
				photo:"assets/img/kids-draw.jpg",
				date:"Octubre 26, 2019"

			},
			{
				specialist: "assets/img/psychologist.jpg",
				description: "Estudio Completado",
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

