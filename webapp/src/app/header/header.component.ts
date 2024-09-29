import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        TranslateModule
    ],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent
{
    lang: string = '';
    spainIcon: string ='assets/images/spain-lang.png';
    englandIcon: string ='assets/images/england-lang.png';

    constructor (private translate: TranslateService)
    {
        this.lang = this.translate.currentLang;
    }

    public changeLang(lang: string): void
    {
        if (!this.translate.getLangs().includes(lang))
            return;

        this.translate.use(lang).subscribe(() => {
            this.lang = this.translate.currentLang;
            localStorage.setItem('lang', this.lang);
        });
    }
}
