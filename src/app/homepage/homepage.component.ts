import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/login']);
  };
  onClick2(){
    this.router.navigate(['/registration']);
  };

}
