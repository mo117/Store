import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['assets/images/14525863331601461685.jpg','assets/images/1137850401601461724.jpg','assets/images/20538328211601461708.jpg'];
  constructor() { }

  ngOnInit(): void {

  }
   

}
