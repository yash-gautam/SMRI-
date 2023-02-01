import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/dataTransfer/data-transfer.service';
@Component({
  selector: 'app-survey-page',
  templateUrl: './surveypage.component.html',
  styleUrls: ['./surveypage.component.css']
})
export class SurveyPageComponent implements OnInit {
  bandValueSelectedForVerticalInt: any;
  bandValueSelectedForHorizontalInt: any;
  bandValueSelectedForProductLifecycle: any;

  constructor(private service:DataTransferService) { }


  organizationName: string = "";
  organizationSector: string = "";
  bandScores: { [dimension: string] : number} = {};


  bandValue: any = ['0','1','2','3','4','5'];
  dim:any;
  ngOnInit(): void {
    // this.service.getDimensions().subscribe((data:any)=>{
    //   this.dim = data[0].Dim
    //   console.log(data[0].Dim)
    // })
  }
  verticalIntegrationValue: any;
  verticalIntegrationDisplay:any=false;
  horizontalIntegrationValue: any;
  horizontalIntegrationDisplay:any=false;
  ProductLifeCycleValue:any;
  ProductLifeCycleDisplay:any=false;
  rating: any[] = [0, 1, 2, 3, 4, 5];

  getRate(i: any,j:any) {
    console.log(i,j);
    this.verticalIntegrationDisplay=true;
    this.verticalIntegrationValue = i;
    this.bandValueSelectedForVerticalInt = i;
    this.bandScores['vertical integration'] = i;
  }


  getHorizontalRate(i:any){
    console.log(i);
    this.horizontalIntegrationDisplay=true;
    this.horizontalIntegrationValue = i;
    this.bandValueSelectedForHorizontalInt=i;
    this.bandScores['horizontal integration'] = i;


  }

  getProductLifeCycleRate(i:any){
    console.log(i);
    this.ProductLifeCycleDisplay=true;
    this.ProductLifeCycleValue = i;
    this.bandValueSelectedForProductLifecycle=i;
    this.bandScores['integrated ProductLifeCycle'] = i;



  }

  verticalIntegration: any = [
    'Vertical processes are not explicitly defined.',
    'Vertical processes are defined and executed by humans, with the support of analogue tools.',
    'Defined vertical processes are completed by humans with the support of digital tools.',
    'Digitized vertical processes and systems are securely integrated across all hierarchical levels of the automation pyramid.',
    'Integrated vertical processes and systems are automated, with limited human intervention.',
    'Automated vertical processes and systems are actively analysing and reacting to data.',
  ];

  horizontalIntegration:any=[
    'Supply chain processes are not explicitly defined.',
    'Supply chain processes are defined and executed by humans, with the support of analogue tools.',
    'Defined supply chain processes are completed by humans with the support of digital tools.',
    'Digitized supply chain processes and systems are securely integrated across business partners and clients along the value chain.',
    'Integrated supply-chain processes and systems are automated, with limited human intervention.',
    'Automated supply chain processes and systems are actively analysing and reacting to data.'
  ];

  ProductLifeCycle:any=[
    'Product lifecycle processes are not explicitly defined.',
    'Product lifecycle processes are defined and executed by humans, with the support of analogue tools.',
    'Defined product lifecycle processes are completed by humans, with the support of digital tools.',
    'Digitized product lifecycle processes and systems are securely integrated across all stages of the product lifecycle.',
    'Integrated product lifecycle processes are automated, with limited human intervention.',
    'Automated product lifecycle processes are actively analysing and reacting to data.'
  ];


  ngifMethod(company: any){
    if(this.bandValue['company']==company){
      console.log("ngifmethod: ", company)
      // this.bandValues['count'] =  '1';
      console.log("ngif method count : ",this.bandValue)
      return true
    }
    else{
      return false
    }
  }

}
