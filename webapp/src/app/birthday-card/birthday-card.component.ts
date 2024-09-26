import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-birthday-card',
  standalone: true,
  imports: [],
  templateUrl: './birthday-card.component.html',
  styleUrl: './birthday-card.component.css'
})
export class BirthdayCardComponent
{
    @Output() displayBallons: EventEmitter<void> = new EventEmitter();

    public title: string = '¡Feliz cumpleaños!';
    public subtitle: string = ':D';
    public message: string = 'Que lo pases genial en tu día';
    public image: string = 'assets/images/happy_birthday.jpg';

    constructor(private _route: ActivatedRoute)
    {
        this._route.queryParams.subscribe(params =>
        {
            this.title = params['title'] || this.title;
            this.subtitle = params['subtitle'] || this.subtitle;
            this.message = params['message'] || this.message;
            this.image = params['imageUrl'] || (params['image']) ? `assets/images/${ params['image'] }` : this.image;
        });
    }

    public emit(): void {
        this.displayBallons.emit();
    }
}
