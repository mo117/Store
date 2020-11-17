import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [

  {path: "" , component:HomeComponent},
  {path: "home" , component:HomeComponent},
  {path: "about" , component:AboutComponent},
  {path: "sections" , component:SectionsComponent},
  {path: "contact" , component:ContactComponent},
  {path: "login" , component:LoginComponent},
  {path:"Regester", component:RegesterComponent},
  {path: "details" , component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
