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
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }
  httpOptions = {
    headers: new HttpHeaders({
      lang: this.cookieService.get("lang"),
   }),
  };
  Get_Home_cat(): Observable<any> {
    return this.http.get(this.baseurl + 'Home/get_main_cat?home=1', this.httpOptions)
  }

  home_item(): Observable<any> {
    return this.http.get(this.baseurl + 'Home/homeWebsite' , this.httpOptions)
  }
  
}
