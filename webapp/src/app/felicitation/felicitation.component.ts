import { Component } from '@angular/core';

@Component({
  selector: 'app-felicitation',
  standalone: true,
  imports: [],
  templateUrl: './felicitation.component.html',
  styleUrl: './felicitation.component.css'
})
export class FelicitationComponent
{
    public emoji: string = "&#128523";
}
