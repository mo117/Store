import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  category: [];
  constructor(private ApiService: ApiService,) { }

  ngOnInit(): void {
    this.get_category();
    this.get_Data();
  }
  NavClick() {
    let element = document.querySelector('.show');
    if(element != null) {
      element.classList.remove('show')
    }
  }

  get_category() {
   this.ApiService.Get_Home_cat().subscribe((res) => {
      console.log(res.data);

     this.category = res.data;
     console.log(this.category);
   });
  }
  //

  get_Data() {
    this.ApiService.allData().subscribe((res) => {
       console.log(res.data);
    });
   }
  Gotoproduct(id) {
    console.log(id);
    
  }
}
