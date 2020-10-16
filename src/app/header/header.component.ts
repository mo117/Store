import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  IsArbic: boolean;
  IsEnglish: boolean;

  constructor(private translateService: TranslateService) { 
    this.IsArbic = true;
    this.IsEnglish = false;
  }

  ngOnInit(): void {
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
