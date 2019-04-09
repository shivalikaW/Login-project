import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model:any = {}
  title = 'My Angular Project';
  firstName;
  lastName;
  username;
  email;
  password;
  constructor(private router:Router) { }

  ngOnInit() {
  }
onSubmit(){
  window.localStorage.setItem('FirstName', this.firstName);
  window.localStorage.setItem('LastName', this.lastName);
  window.localStorage.setItem('Username', this.username);
  window.localStorage.setItem('Email', this.email);
  window.localStorage.setItem('Password', this.password);
  alert('successfully register');
  this.router.navigate(['/Home']);
}
onClick(){
  this.router.navigate(['/Home']);
};
}
