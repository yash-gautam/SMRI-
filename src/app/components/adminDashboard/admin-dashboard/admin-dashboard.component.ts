import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import  ChartDataLabels  from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {

  modelArray = new Array(1, 1, 1, 1, 1, 1, 1, 1);
  modelArrayLength: number = 4;

  topUsersArray = new Array(1,1,1,1,1,1,1);
  topUsersArrayLength: number = 5;

  recentApplicationArray =  new Array(1,1,1,1,1,1,1,1,1);
  limitRecentApplicationRows: number = 3;


  // DUMMY DATA FOR CHART
  dataArray: number[] = [5,3,6];
  dataNameArray = new Array('SIRI', 'Impuls', 'Surway');
  mostUsedModelName: string = '';
  leastUsedModelName: string = '';
  mostUsedModelIndex: number = 0;

  showCard: boolean = true;
  isExpanded: boolean = false;
  viewAllRecentAppIsClicked: boolean = false;

  constructor() {}
  // let temp;
  // if(this.dataArray[i]<this.dataArray[i+1]){
  //   temp = this.dataArray[i+1];
  //   this.dataArray[i+1] = this.dataArray[i];
  //   this.dataArray[i] = temp;
  // }
  ngOnInit(): void {

    let temp;
    let tempString;
    for(let i=0; i<this.dataArray.length; i++){
      for(let j=0; j<this.dataArray.length-i-1; j++){
        if(this.dataArray[j] > this.dataArray[j+1]){
          temp = this.dataArray[j+1];
          this.dataArray[j+1] = this.dataArray[j];
          this.dataArray[j] = temp;

          //SORTING DATA NAME ARRAY
          tempString = this.dataNameArray[j+1];
          this.dataNameArray[j+1] = this.dataNameArray[j];
          this.dataNameArray[j] = tempString;
        }
      }
    }

    this.mostUsedModelName = this.dataNameArray[this.dataNameArray.length-1];
    this.leastUsedModelName = this.dataNameArray[0];

    console.log("most used model: "+this.mostUsedModelName);
    console.log("least used model: "+this.leastUsedModelName);

    // var dataArraySorted: number[] = this.dataArray.sort((n1,n2) => n1 - n2);

    // console.log("sorted array: "+this.dataArray[this.dataArray.length-1]);
    console.log("sorted array: "+this.dataArray);
    console.log("sorted name array: "+this.dataNameArray);

    Chart.register(ChartDataLabels);

    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: this.dataNameArray,
        datasets: [{
          label: 'My First Dataset',
          data: this.dataArray,
          backgroundColor: [
            '#ffae42',
            '#0f4d92',
            '#1b4d3e'
          ],
          hoverOffset: 4
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        layout: {
          padding: {
              // left: 100
          }
        },
        plugins: {
          legend: {
            display: true,
          },
          datalabels: {
            display: false,
            align: 'bottom',
            backgroundColor: '#ccc',
            borderRadius: 3,
            font: {
              size: 18,
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }



  expandModelList() {
    if (this.modelArrayLength == 4) {
      this.modelArrayLength = this.modelArray.length;
    } else if (this.modelArrayLength > 4) {
      this.modelArrayLength = 4;
    }

    if (this.isExpanded == true) {
      this.isExpanded = false;
    } else {
      this.isExpanded = true;
    }
  }

  viewAllRecentApplications(){
    if(this.viewAllRecentAppIsClicked==false){
      this.viewAllRecentAppIsClicked=true;
      this.limitRecentApplicationRows = this.recentApplicationArray.length;
    }else if(this.viewAllRecentAppIsClicked==true){
      this.viewAllRecentAppIsClicked=false;
      this.limitRecentApplicationRows=3;
    }
  }
}

// slides = [342, 453, 846, 855, 234, 564, 744, 243];

//   slideConfig = {
//     "slidesToShow": 4,
//     "slidesToScroll": 1,
//     "nextArrow": "<div class='nav-btn next-slide'></div>",
//     "prevArrow": "<div class='nav-btn prev-slide'></div>",
//     "dots": true,
//     arrows: true,
//     "infinite": false
//   };

//   addSlide() {
//     this.slides.push(488)
//   }

//   removeSlide() {
//     this.slides.length = this.slides.length - 1;
//   }

//   slickInit(e: any) {
//     console.log('slick initialized');
//   }

//   breakpoint(e: any) {
//     console.log('breakpoint');
//   }

//   afterChange(e: any) {
//     console.log('afterChange');
//   }

//   beforeChange(e: any) {
//     console.log('beforeChange');
//   }
