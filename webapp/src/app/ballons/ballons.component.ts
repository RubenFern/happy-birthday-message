import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FelicitationComponent } from '../felicitation/felicitation.component';
import { BirthdayCardComponent } from '../birthday-card/birthday-card.component';

@Component({
    selector: 'app-ballons',
    standalone: true,
    imports: [
        CommonModule,
        FelicitationComponent,
        BirthdayCardComponent
    ],
    templateUrl: './ballons.component.html',
    styleUrl: './ballons.component.css'
})
export class BallonsComponent implements OnInit
{
    public numBallonsArray: number[] = [];

    ngOnInit(): void
    {
        const numBallons = window.innerWidth < 768 ? 7 : 27;

        this.numBallonsArray = Array(numBallons).fill(0).map((x, i) => i);
    }
}
