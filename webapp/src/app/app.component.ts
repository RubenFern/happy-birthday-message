import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BallonsComponent } from './ballons/ballons.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        BallonsComponent,
        CommonModule,
        HttpClientModule,
        RouterOutlet,
        TranslateModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent
{
    constructor(private translate: TranslateService)
    {
        this.translate.addLangs(['en', 'es']);
        this.translate.setDefaultLang('en');

        this.translate.use(localStorage.getItem('lang') || this.getBrowserLang()).subscribe();
    }

    private getBrowserLang(): string
    {
        const browserLang = this.translate.getBrowserLang();

        return browserLang?.match(/en|es/) ? browserLang : 'en';
    }
}
