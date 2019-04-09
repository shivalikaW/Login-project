import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatagridService } from '../datagrid.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'My Angular Project';
  rowData: any = [];
 
  columnDefs = [
    {headerName:'Sr.No',field:'srno'},
    {headerName: 'Fist Name', field: 'fname'},
    {headerName: 'Last Name', field: 'lname'},
    {headerName: 'Post', field: 'post'},
    {headerName: 'Salary', field: 'salary'},
    {headerName:'Mobile No.',field:'mobile'},
    {headerName:'Email Id',field:'email'},
    {headerName:'Actions',field:'actions'}
  
];

  constructor(private router:Router, private datagridService: DatagridService) { }

  ngOnInit() {
    let data = localStorage.getItem('RowData');
    if(data){
      this.rowData = JSON.parse(data);
    } else {
      this.rowData = this.datagridService.getGridData();
      console.log('main rowdata', this.rowData);
    }
    
  }
  onAdd(){
    this.router.navigate(['/add']);
  }
  onBack(){
    this.router.navigate(['/login']);
  }
  onDelete(id){
    console.log('fjklk',id);
    alert('Delete confirm');
    this.datagridService.deleteEmp(id);
    this.rowData = this.datagridService.getGridData();
  }
}