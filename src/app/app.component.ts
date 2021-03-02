import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ngx-translate';

  // ** //
  currentLang: string;
  currentDir: string;

  // ** //
  LOGIN_BY: {en: string, ar: string};

  constructor(public translate: TranslateService) {
    const body = document.getElementsByTagName('body');
    body[0].setAttribute('dir', localStorage.getItem('_lang'));
    // ** //
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

  }

  ngOnInit() {
    this.LOGIN_BY = {
      en: 'Login with facebook',
      ar: 'تسجيل الدخول بواسطه الفيس بوك'
    };

    this.translate.onLangChange.subscribe(() => {
      console.log(this.translate);
    });
  }

  ngAfterViewInit() {

  }

  changeCurrentLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('currentLang', language);
    this.currentLang = language;
    // ** //
    const body = document.getElementsByTagName('body');
    if (this.currentLang === 'ar') {
      body[0].setAttribute('dir', 'rtl');
      localStorage.setItem('_lang', 'rtl');
    } else {
      body[0].setAttribute('dir', 'ltr');
      localStorage.setItem('_lang', 'ltr');
    }
  }

}
