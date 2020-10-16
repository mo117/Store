import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  category: [];

  constructor(private ApiService: ApiService,) { }

  ngOnInit(): void {
    this.get_category();
  }

  get_category() {
    this.ApiService.Get_Home_cat().subscribe((res) => {
       console.log(res.data);
 
      this.category = res.data;
      console.log(this.category);
    });
   }
   Gotoproduct(id) {
     console.log(id);
     
   }
 
}
