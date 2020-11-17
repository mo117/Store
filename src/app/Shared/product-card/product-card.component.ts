import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() ProductDetails: any;


  constructor(private ApiService: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {}
  
  addToFav(id) {
    this.ApiService.add_to_fav(id).subscribe((res) => {
      console.log(res.data);
      if(res.status == 1) {
        this.toastr.success(res.message);
      }
      else {
        this.toastr.error(res.message);
      }
    });
   }

  addToCart(id) {
    
    this.ApiService.add_to_cart(id).subscribe((res) => {
      console.log(res.data);
      if(res.status == 1) {
        this.toastr.success(res.message);
      }
      else {
        this.toastr.error(res.message);
      }
    });
   }
 
}
