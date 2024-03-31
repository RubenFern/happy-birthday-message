import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-card',
  standalone: true,
  imports: [],
  templateUrl: './birthday-card.component.html',
  styleUrl: './birthday-card.component.css'
})
export class BirthdayCardComponent
{
    public emoji: string = "&#128523";
}
