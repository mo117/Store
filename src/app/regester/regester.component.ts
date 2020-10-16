import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {

  constructor(private ApiService: ApiService, private cookies: CookieService) { }
  LogInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('',
      Validators.required),
      phone: new FormControl('',
      Validators.required),
      frist_name: new FormControl('',
      Validators.required),
      last_name: new FormControl('',
      Validators.required),
      username: new FormControl('',
      Validators.required),
      password_confirmation: new FormControl('',
      Validators.required)
  })

  ngOnInit(): void {
  }
  onSubmit(formData) {
    console.log(formData);
    
    if (formData.valid) {
   
      this.ApiService.regester(formData.value).subscribe(
        res => {
          console.log(res);
          if(res.status == 1) {
            this.cookies.set("user_token", res.data.token)
          }
          else {
            // res.message
          }
                  })
    }
    else {
     

    }
  }

}
