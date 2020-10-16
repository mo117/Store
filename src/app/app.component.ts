import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  loader: boolean;
  constructor(
    private cookieService: CookieService, private translateService: TranslateService,) 
  {
    translateService.setDefaultLang('en');
    this.loader = true
  }
  changeLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
    this.cookieService.set('lang', lang)
  }
  ngOnInit() {
    if (this.cookieService.get('lang') == 'ar') {
      this.translateService.use('ar');
      this.translateService.setDefaultLang('ar');
    }
    else {
      this.translateService.use('en');
      this.translateService.setDefaultLang('en');
    }
  }
}
