import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from "../environments/environment";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = environment.baseUrl;
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'NDMwYTZqMmx2NGFob2I2OHI5bnEwcGlxa3I6MXU3MzNhbnBrcnBsMTM1Z3Q5b2ttcXQya2twM2M2OHNwaDQ3amY4MWluaTZ2bWRocm9nbQ==',
      'Authorization ': 'Bearer NDMwYTZqMmx2NGFob2I2OHI5bnEwcGlxa3I6MXU3MzNhbnBrcnBsMTM1Z3Q5b2ttcXQya2twM2M2OHNwaDQ3amY4MWluaTZ2bWRocm9nbQ==',
    }),
  };

  logIn(fromData): Observable<any> {
    const fromValue = new FormData();
    fromValue.append("eamilOrPhone", fromData.email);
    fromValue.append("password", fromData.password);
    fromValue.append("fire_base_token", "5488523062");
    return this.http.post(this.baseurl + 'Auth_general/login', fromValue, this.httpOptions)
  }

  regester(fromData): Observable<any> {
    const fromValue = new FormData();
    fromValue.append("email", fromData.email);
    fromValue.append("password", fromData.password);
    fromValue.append("username", fromData.username);
    fromValue.append("password_confirmation", fromData.password_confirmation);
    fromValue.append("frist_name", fromData.frist_name);
    fromValue.append("last_name", fromData.last_name);
    fromValue.append("image", "");
    fromValue.append("lat", "");
    fromValue.append("lng", "");
    fromValue.append("verify_type", fromData.verify_type);
    fromValue.append("phone", fromData.phone);
    fromValue.append("fire_base_token", "nhbgvcxkkkkmmmkmmkm");
    return this.http.post(this.baseurl + 'Auth_general/register', fromValue, this.httpOptions)
  }

  Get_Home_cat(): Observable<any> {
    return this.http.get(this.baseurl + 'Home/get_main_cat?home=1', this.httpOptions)
  }

  home_item(): Observable<any> {
    return this.http.get(this.baseurl + 'Home/homeWebsite', this.httpOptions)
  }

  products_item(cat_id, level_id): Observable<any> {
    return this.http.get(this.baseurl + 'Product/products_level?level=' + level_id + '&cat_id=' + cat_id, this.httpOptions)
  }

  serch_item(name, cat_id, type): Observable<any> {
    return this.http.get(this.baseurl + 'Home/search_by_name?name=' + name + '&cat_id=' + cat_id + '&type=' + type, this.httpOptions)
  }

  add_to_cart(id): Observable<any> {
    const fromValue = new FormData();
    fromValue.append("quantity", "1");
    fromValue.append("color_id", null);
    fromValue.append("size_id", null);
    return this.http.post(this.baseurl + 'Product/add_to_cart/' + id, fromValue,this.httpOptions)
  }

  add_to_fav(id): Observable<any> {
    return this.http.post(this.baseurl + 'Product/wishlist/' + id, "", this.httpOptions)
  }

  allData(): Observable<any> {
    return this.http.get('https://elenasport-io1.p.rapidapi.com/v2/countries', this.httpOptions)
  }

}
