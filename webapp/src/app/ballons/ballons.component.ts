import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BirthdayCardComponent } from '../birthday-card/birthday-card.component';

@Component({
    selector: 'app-ballons',
    standalone: true,
    imports: [
        BirthdayCardComponent,
        CommonModule,
        MatIconModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TranslateModule
    ],
    templateUrl: './ballons.component.html',
    styleUrl: './ballons.component.css'
})
export class BallonsComponent implements OnInit
{
    public numBallonsArray: number[] = [];
    public color: string = 'defect';
    public showBallons: boolean = false;

    constructor(private _route: ActivatedRoute) {
        this._route.queryParams.subscribe(params => this.color = params['color'] || 'defect');
    }

    ngOnInit(): void
    {
        let numBallons = 0;

        if (window.innerWidth < 400)
            numBallons = 4;
        else if (window.innerWidth < 800)
            numBallons = 8;
        else if (window.innerWidth < 1500)
            numBallons = 19;
        else
            numBallons = 27;

        this.numBallonsArray = Array(numBallons).fill(0).map((x, i) => i);
    }

    public displayBallons(): void {
        this.showBallons = true;
    }
}
