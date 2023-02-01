import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //PAGINATION VARIABLES
  p: number = 1;
  count: number = 3;

  showDimensionTable: boolean = true;
  showDefaultContent: boolean = false;
  dimensionArray = new Array(1,1,1,1,1,1,1,1);


  addModel(){
    this.showDimensionTable=true;
    this.showDefaultContent=false;
  }

}
