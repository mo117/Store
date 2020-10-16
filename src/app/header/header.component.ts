import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { SessionData } from '../service/seisson-data'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  IsArbic: boolean;
  IsEnglish: boolean;
  public sessionData = SessionData;
  constructor(private translateService: TranslateService, private cookieService: CookieService) { 
    this.IsArbic = true;
    this.IsEnglish = false;
  }

  ngOnInit(): void {
  }
  logout() {
    this.cookieService.set("user_token", '')
  }
  changeLang(lang: string) {
    if (lang == 'ar') {
      this.IsArbic = false;
      this.IsEnglish = true;
    }
    else {
      this.IsArbic = true;
      this.IsEnglish = false;
    }
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
  }

}
