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
        let numBallons = 0;
        console.log(window.innerWidth);

        if (window.innerWidth < 400)
            numBallons = 4;
        else if (window.innerWidth < 800)
            numBallons = 8;
        else if (window.innerHeight < 1500)
            numBallons = 19;
        else
            numBallons = 27;

        console.log(numBallons);

        this.numBallonsArray = Array(numBallons).fill(0).map((x, i) => i);
    }
}
