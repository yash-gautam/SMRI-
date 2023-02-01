import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  // POST
  testSend = '/testSend',
  dimensionsCompaniesCount = '/postDimensionsCompaniesCount',
  postOrgDetails = '/organisationDetails',
  postDimensionDetails = '/dimensionDetails',

  //GET
  getOrganizationDetails = '/',
  getDimensionDetails = '/',
  getTestData = '/test',
  getTestData1 = '/addParentNode',
}


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private URL = 'http://127.0.0.1:5000';
  dimensionsArray = new Array;
  dimensionsWeightArray = new Array;
  dimensionsDescriptionArray = new Array;
  dimensionsCutoffArray = new Array;
  organizationsArray = new Array;




  constructor(private http: HttpClient) { }

  //GET METHODS

  getTestData(): Observable<any>{
    return this.http.get<any>(`${this.URL}${endpoint.getTestData}`, {
    });
  }

  getOrganizationDetails(): Observable<any>{
    return this.http.get<any>(`${this.URL}${endpoint.getOrganizationDetails}`, {
    });
  }

  getDimensionDetails(): Observable<any>{
    return this.http.get<any>(`${this.URL}${endpoint.getDimensionDetails}`, {
    });
  }




  //POST METHODS

  postOrganizationDetails(sector: any, orgName: any): Observable<any>{
    return this.http.post<any>(`${this.URL}${endpoint.postOrgDetails}/${sector}/${orgName}`, {
    });
  }

  postDimensionDetails(title: any, description: any, weight: any, cutoff: number): Observable<any>{
    return this.http.post<any>(`${this.URL}${endpoint.postDimensionDetails}/${title}/${description}/${weight}/${cutoff}`, {
    });
  }

  postDimensionsCompaniesCount(dimensions: number, companies: number): Observable<any>{
    return this.http.post<any>(`${this.URL}${endpoint.dimensionsCompaniesCount}/${dimensions}/${companies}`, {
    });
  }

  sendData(data: any): Observable<any>{
    return this.http.post<any>(`${this.URL}${endpoint.testSend}/${data}`, {
    });
  }









  //COMPONENT DATA TRANSFER

  transferdimensionDetails(dimensionTitleArray:Array<number>){
    // this.dimensionsArray.push(dimensionTitle);
    for(let i=0; i<dimensionTitleArray.length;i++){
      this.dimensionsArray[i] = dimensionTitleArray[i];
    }
    console.log("dimension array transferred! ", this.dimensionsArray);
  }

  transferdimensionWeightDetails(dimensionWeightArray:Array<number>){
    // this.dimensionsArray.push(dimensionTitle);
    for(let i=0; i<dimensionWeightArray.length;i++){
      this.dimensionsWeightArray[i] = dimensionWeightArray[i];
    }
    console.log("dimension weight array transferred! ", this.dimensionsWeightArray);
  }

  transferdimensionDescriptionDetails(dimensionDetailsArray:Array<number>){
    // this.dimensionsArray.push(dimensionTitle);
    for(let i=0; i<dimensionDetailsArray.length;i++){
      this.dimensionsDescriptionArray[i] = dimensionDetailsArray[i];
    }
    console.log("dimension description array transferred! ", this.dimensionsDescriptionArray);
  }

  transferdimensionCutoffDetails(dimensionCutoffArray:Array<number>){
    // this.dimensionsArray.push(dimensionTitle);
    for(let i=0; i<dimensionCutoffArray.length;i++){
      this.dimensionsCutoffArray[i] = dimensionCutoffArray[i];
    }
    console.log("dimension cutoff array transferred! ", this.dimensionsDescriptionArray);
  }

  transferOrganizationDetails(orgName:Array<number>){
    // this.organizationsArray.push(orgName);
    for(let i=0; i<orgName.length;i++){
      this.organizationsArray[i] = orgName[i];
    }
    console.log("organization array transferred! ", this.organizationsArray);
  }




}
