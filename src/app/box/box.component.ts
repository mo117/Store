import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { SessionData } from '../service/seisson-data';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  category: [];
  type = 2;
  cat_id = "";
  public sessionData = SessionData;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {

    this.get_category()
  }
  
  get_category() {
    this.ApiService.Get_Home_cat().subscribe((res) => {
       console.log(res.data);
 
      this.category = res.data;
      console.log(this.category);
    });
   }
   Gotoproduct(id) {
     this.cat_id = id;
    this.get_products(this.cat_id, "")
     
   }
   get_products(cat_id, level_id) {
    this.ApiService.products_item(cat_id, level_id).subscribe((res) => {
      
      this.sessionData.ProductObj = res.data;
     
    });

   }

   search_products() {
    let inputValue = (<HTMLInputElement>document.getElementById("name_product"))
    .value;
    this.ApiService.serch_item(inputValue, this.cat_id, this.type).subscribe((res) => {
      
      this.sessionData.ProductObj = res.data;
     
    });

   }

}
