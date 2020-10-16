import { Component, OnInit } from '@angular/core';
import { ApiService }  from '../api.service'
import { SessionData } from '../service/seisson-data';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  public sessionData = SessionData;

  constructor(private ApiService:ApiService ) { }

  ngOnInit(): void {

    this.get_products('', '');
  }

  get_products(cat_id, level_id) {
    this.ApiService.products_item(cat_id, level_id).subscribe((res) => {
      
      this.sessionData.ProductObj = res.data;
     
    });

   }
 
}
