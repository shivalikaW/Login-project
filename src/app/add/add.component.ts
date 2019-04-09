import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { DatagridService } from '../datagrid.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model:any = {}
  title = 'My Angular Project';
  empData=[];
  srno:number;
  fname: string;
  lname: string; 
  post: string;
  salary: number;
  mobile: number; 
  email: string;
  actions: string;
 
  constructor(private router:Router, private mainComponent: MainComponent,private datagridService: DatagridService) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    let srno = 0;
    let fname = '';
    let lname = '';
    let post = '';
    let salary='';
    let mobile='';
    let email='';
  }

  save(form: NgForm){
    console.log(form.value);
    this.datagridService.addEmp(form.value);
    this.empData= this.datagridService.getGridData();
    console.log('opo',this.empData);
    this.onCancel();

  }
 
  onCancel(){
    this.router.navigate(['/main']);
  }
}
