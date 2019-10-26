import { Component,Input, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/js/canvasjs.min';






@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  constructor() { }

	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,		
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Apple" },
				{ y: 55, label: "Mango" },
				{ y: 50, label: "Orange" },
				{ y: 65, label: "Banana" },
				{ y: 28, label: "Grapes" },
				{ y: 34, label: "Lychee" }

			]
		}]
	});
		
	chart.render();
	}
	
	model(){}

}
