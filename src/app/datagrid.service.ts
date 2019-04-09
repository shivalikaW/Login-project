import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class DatagridService {
 
  private rowData = [
    {srno:1,fname: 'Toyota',lname:'fdj', post: 'Celica', salary: 35000,mobile:1234567890,email:'abc@getMaxListeners.com',actions:''},
    {srno:2,fname: 'Ford',lname:'nbhj', post: 'Mondeo', salary: 32000,mobile:2345678901,email:'ford@getMaxListeners.com',actions:''},
    {srno:3,fname: 'Porsche',lname:'lkji', post: 'Boxter', salary: 72000,mobile:4523456789,email:'porsche@gmail.com',actions:''},
    {srno:4,fname: 'DEertreta',lname:'fvf', post: 'Ceklo', salary: 39000,mobile:9080898790,email:'mkl@getMaxListeners.com',actions:''},
    {srno:5,fname: 'cds',lname:'wertr', post: 'uiop', salary: 22000,mobile:8988678901,email:'fmjd@getMaxListeners.com',actions:''},
    {srno:6,fname: 'Plohe',lname:'fgtyji', post: 'gfdter', salary: 55000,mobile:7654556789,email:'pouiuiche@gmail.com',actions:''},
    {srno:7,fname: 'deshe',lname:'eqaji', post: 'gaqter', salary: 32000,mobile:7656589090,email:'deshe@gmail.com',actions:''}
];
// private datadata=[  localStorage['RowData'] = JSON.stringify(this.rowData)];
  constructor() { }
  getGridData()
  {
      //Get grid datasource
      // return this.rowData.slice();
      // localStorage['RowData'] = JSON.stringify(this.rowData);
      localStorage.setItem('RowData',JSON.stringify(this.rowData));
      console.log("updated data", this.rowData);
      return this.rowData;
  }
  getEmp(index: number) {
    //Get array item at particular
    
    let data = JSON.parse(localStorage.getItem('RowData'));
    return data.find(x => x.srno === index);

}
  addEmp(data: any ){
    console.log(data);
    this.rowData[this.rowData.length - 1]
    this.rowData.push(data);
    localStorage['RowData'] = JSON.stringify(this.rowData);
    console.log('gjh', this.rowData);
  }


      deleteEmp(index: number) {
        //Get index of the element in the array
        // let i = this.rowData.findIndex(x => x.srno === index);
        //Remove the record at given index
        this.rowData = this.rowData.filter(item => item.srno !== index);
        // this.rowData.splice(index, 1); 
        // this.rowData.pop();
  
      }
      updateEmp(index: number,newEmp) {
        debugger;
        //Get index of the element in the array
        const i = this.rowData.findIndex(x => x.srno === index);
        //Update the record at given index
        this.rowData[i] = newEmp;
        console.log('asd', this.rowData[i]);
        //Save Data in the Local Storage
        localStorage['RowData'] = JSON.stringify(this.rowData);
      }
}
