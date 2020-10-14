import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService }  from '../api.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  products:[];
  newProduct: [];
  newpopular:[];
  constructor(private ApiService:ApiService ) { }

  ngOnInit(): void {

    this.get_products();
  }

  get_products(){
 
    this.ApiService.home_item().subscribe((all)=>{
 
      console.log(all.data)

      this.products = all.data.best_seller
      this.newProduct = all.data.new_item
      this.newpopular = all.data.popular
    })

  }
}
