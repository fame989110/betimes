import { Component,ElementRef,ViewChild } from '@angular/core'
import { Router } from '@angular/router';
import { CanvasJS } from '@canvasjs/angular-charts';

import {Chart,Point} from "chart.js";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent {

  chart: any;
  chart1: any;

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  getChartInstance1(chart: object) {
    this.chart1 = chart;
   
  }

  chartOptions= {
     theme: "light2",animationEnabled: true,   title: {
    text: ""
  },
  data: [{
    type: "spline",
    dataPoints: [
      { label: "like",  y: 0  },
      { label: "comment", y: 0  },
      { label: "share", y: 0 },
      { label: "reaction",  y: 0  },
    ]
  }]                
}


  chartOptions1= {
    theme: "light2",animationEnabled: true,
    title: {
      text: ""
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "positive",  y: 0 },
        { label: "negative", y: 0  },
        { label: "neutral", y: 0  },
       
      ]
    }]          
  }
  
  getChart(check:any){
    if(check.checked==true){
      this.chart.options.data[0]= ({
        type: "spline",
        animationEnabled: true,
        dataPoints: [
          { label: "like",  y: 23  },
          { label: "comment", y: 50  },
          { label: "share", y: 0 },
          { label: "reaction",  y: 10  },
        ]
        })
        this.chart1.options.data[0] =({
          type: "column",
  
          dataPoints: [
            { label: "positive",  y: 10 },
            { label: "negative", y: 10  },
            { label: "neutral", y: 15  },
          ]
          })  
      this.chart.render()
      this.chart1.render()     
        
    }else{
      this.chart.options.data[0]= ({
        type: "spline",
        dataPoints: [
          { label: "like",  y: 0  },
          { label: "comment", y: 0  },
          { label: "share", y: 0 },
          { label: "reaction",  y: 0  },
        ]
        })
        this.chart1.options.data[0] =({
          type: "column",
  
          dataPoints: [
            { label: "positive",  y: 0 },
            { label: "negative", y: 0  },
            { label: "neutral", y: 0  },
          ]
          })
     this.chart1.render()
     this.chart.render()
    }
  }
	

  getChart1(check:any){
    if(check.checked==true){
      this.chart.options.data[1] = ({
        type: "spline",

        dataPoints: [
          { label: "like",  y: 40  },
          { label: "comment", y: 70  },
          { label: "share", y: 5 },
          { label: "reaction",  y: 19  },
        ]
        })

        this.chart1.options.data[1] =({
          type: "column",
          dataPoints: [
            { label: "positive",  y: 30 },
            { label: "negative", y: 10  },
            { label: "neutral", y: 15  },
          ]
          })
        
      this.chart.render()
      this.chart1.render()
      
    }else{
      this.chart.options.data[1]= ({
        type: "spline",
        
        dataPoints: []
        })
        this.chart1.options.data[1] =({
          type: "column",
          dataPoints: []
          })
     this.chart1.render()
     this.chart.render()
    }
   
  
  }
 

  

  constructor(private elementRef: ElementRef,private router:Router){
 
  }

  /*home(){
    this.router.navigateByUrl('home')
  }*/

  logOut(){
    this.router.navigateByUrl('/_login')
  }
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#F0F8FF'
}

}


