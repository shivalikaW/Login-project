import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatagridService } from 'src/app/datagrid.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  rowData:any;
  model:any = {}
  title = 'My Angular Project';
  constructor(private router1:Router,private router:ActivatedRoute, private datagridService: DatagridService) { }

  ngOnInit() {
    this.router.params
    .subscribe(
      (params: Params) => {
        console.log("Init");
        console.log(+params['id']);
        this.id = +params['id'];
        
        this.model = this.datagridService.getEmp(this.id);
        this.initForm();
      }
    );
  }
  private initForm() {
    let srno = 0;
    let fname = '';
    let lname = '';
    let post = '';
    let salary=0;
    let mobile=0;
    let email='';
    const emp = this.datagridService.getEmp(this.id);
    console.log(emp);

    srno = emp.srno;
    fname = emp.fname;
    lname =emp.lname;
    post=emp.post;
    salary=emp.salary;
    mobile=emp.mobile;
    email=emp.email;

  }
  edit(form: NgForm){
    
    console.log(form.value);
    this.datagridService.updateEmp(this.id,form.value);
    this.model= this.datagridService.getGridData();
    console.log('sad',this.model);
    this.onCancel();
    
  }
  onCancel(){
     this.router1.navigate(['/main']);
  }
}
