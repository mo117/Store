import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { SessionData } from '../app/service/seisson-data'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  loader: boolean;
  public sessionData = SessionData;
  constructor(
    private cookieService: CookieService, private translateService: TranslateService,) 
  {
    console.log(this.cookieService.get('user_token'));
    
    translateService.setDefaultLang('en');
    this.loader = true;
    if(this.cookieService.get('user_token') != '') {
      this.sessionData.IsUserLog = true;
    }
    else {
      this.sessionData.IsUserLog = false;
    }
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
