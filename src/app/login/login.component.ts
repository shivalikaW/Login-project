import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {}
  title = 'My Angular Project';
  username:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    window.localStorage.setItem('Username', this.username);
    window.localStorage.setItem('Password', this.password);
    this.router.navigate(['/main']);
  }
  onClick(){
    this.router.navigate(['/Home']);
  };
}
