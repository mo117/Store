import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private ApiService: ApiService) { }
  LogInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('',
      Validators.required)
  })
  ngOnInit(): void {
  }

  onSubmit(formData) {
    console.log(formData);
    
    if (formData.valid) {
   
      this.ApiService.logIn(formData.value).subscribe(
        res => {
          console.log(res);
                  })
    }
    else {
     

    }
  }


}
