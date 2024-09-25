import { Component } from '@angular/core';
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
    public title: string = '';
    public subtitle: string = '';
    public image: string = '';
    public color: string = 'defect';

    constructor(private _route: ActivatedRoute)
    {
        this._route.queryParams.subscribe(params =>
        {
            this.title = params['title'];
            this.subtitle = params['subtitle'];
            this.image = params['imageUrl'] || `assets/images/${ params['image'] || '' }`;
            this.color = params['color'] || 'defect';

            document.documentElement.classList.add(`bg-${ this.color }`);
        });
    }


}
