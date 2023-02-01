import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/dataTransfer/data-transfer.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  showCoverPage: boolean = true;
  showCoverImage: boolean = true;
  showAssessmentPage: boolean = false;
  showDimensionConfirmation: boolean = false;
  showOrganizationConfirmation: boolean = false;


  organizationName: string = '';
  organizationSector: string = 'Select';
  newDimension: any;
  newDimensionDetail: any;
  newDimensionWeight: any;
  newDimensionCutoff: any;

  numberOfDimensions: number = 0;
  numberOfOrganizations: number = 0;

  dimensionsArray =  new Array;
  dimensionsWeightArray =  new Array;
  dimensionsDescriptionArray =  new Array;
  dimensionsCutoffArray =  new Array;
  organizationsArray = new Array;
  organizationsSectorArray: any = [];

  dimensionsList: { [dimension: string] : string} = {};
  organizationsList: { [organization: string] : string} = {};

  i: any = 0;

  constructor(private dataService: DataTransferService) { }

  ngOnInit(): void {
  }

  goToCoverPage(event: any){
    this.showCoverPage = true;
    this.showCoverImage = true;
    this.showAssessmentPage = false;
  }

  takeAssessmentIsClicked(event: any){
    // this.showCoverPage = false;
    // this.showCoverImage = false;
  }

  enterOrganizationName(event: any){
    this.organizationName = event.target.value;
    console.log("org name: ", this.organizationName);
  }

  enterOrganizationSector(event: any){
    this.organizationSector = event.target.value;
    console.log("org sector: ", this.organizationSector);
  }

  closeOrgDetailsModal(){
    this.showAssessmentPage = true;
  }

  addOrganizationButton(){
    this.organizationsArray.push(this.organizationName);
    // this.organizationsSectorArray.push(this.organizationSector)

    // console.log("org array final: ", this.organizationsArray)
    // console.log("org sector array final: ", this.organizationsSectorArray)

    this.dataService.postOrganizationDetails(this.organizationSector, this.organizationName).subscribe(response=>{
      console.log(response);
    });

    this.organizationName='';
    this.organizationSector='Select';
    this.showOrganizationConfirmation = true;
    this.numberOfOrganizations++;
    this.i++;
  }

  addDimensionButton(){
    // this.numberOfDimensions.push(1);
    // console.log(this.numberOfDimensions);

    // this.dimensionsList['dimension'] = this.newDimension;

    this.dimensionsArray.push(this.newDimension)
    this.dimensionsWeightArray.push(this.newDimensionWeight);
    this.dimensionsDescriptionArray.push(this.newDimensionDetail);
    this.dimensionsCutoffArray.push(this.newDimensionCutoff);

    this.dataService.postDimensionDetails(this.newDimension, this.newDimensionDetail, this.newDimensionWeight, this.newDimensionCutoff).subscribe(response=>{
      console.log(response);
    });

    this.newDimension=null;
    this.newDimensionDetail=null;
    this.newDimensionWeight=null;
    this.newDimensionCutoff=null;
    this.showDimensionConfirmation=true;
    this.numberOfDimensions++;

    // this.dataService.transferdimensionDetails(this.dimensionsList);
  }

  newDimensionMethod(event: any){
    this.newDimension = event.target.value;
    console.log("new dimension: ", this.newDimension);
  }

  newDimensionClick(){
    this.showDimensionConfirmation=false;
  }

  newDimensionDetailMethod(event: any){
    this.newDimensionDetail = event.target.value;
    console.log("new dimension details: ", this.newDimensionDetail);
  }

  newDimensionWeightMethod(event: any){
    this.newDimensionWeight = event.target.value;
    console.log("new dimension weight: ", this.newDimensionWeight);
  }

  newDimensionCutoffMethod(event: any){
    this.newDimensionCutoff = event.target.value;
    console.log("new dimension cutoff: ", this.newDimensionCutoff);
  }

  newDimensionDetailClick(){
    this.showDimensionConfirmation=false;
  }

  newDimensionWeightClick(){
    this.showDimensionConfirmation=false;
  }

  newDimensionCutoffClick(){
    this.showDimensionConfirmation=false;
  }

  saveDimensionDetails(){
    // console.log("number of dimensions:", this.numberOfDimensions);
    // console.log("dimension array: ", this.dimensionsArray)
    // console.log("dimension weight array: ", this.dimensionsWeightArray)
    // console.log("dimension desc array: ", this.dimensionsDescriptionArray)

    this.dataService.transferdimensionDetails(this.dimensionsArray);
    this.dataService.transferdimensionWeightDetails(this.dimensionsWeightArray);
    this.dataService.transferdimensionDescriptionDetails(this.dimensionsDescriptionArray);
    this.dataService.transferdimensionCutoffDetails(this.dimensionsCutoffArray);


    this.dataService.postDimensionsCompaniesCount(this.numberOfDimensions, this.numberOfOrganizations).subscribe(response=>{
      console.log(response);
    });

  }


  saveCompanyDetails(){
    // console.log("no. of orgs: ", this.numberOfOrganizations);
    this.dataService.transferOrganizationDetails(this.organizationsArray);
    // POST COMPANY DATA HERE!!!!!!!!!!!!!!
    // this.showAssessmentPage = true;
  }



}
