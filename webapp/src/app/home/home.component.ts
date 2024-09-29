import { CommonModule } from "@angular/common";
import { Component, isDevMode } from "@angular/core";
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule } from "@ngx-translate/core";

import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent
{
    public copied: boolean = false;
    public showUrl: boolean = false;
    public url: string = '';
    public selectedColor: string = '';
    public colors = ['defect', 'blue', 'green', 'pink', 'purple', 'red', 'yellow'];

    constructor(private snackBar: MatSnackBar) {
        document.documentElement.classList.add('bg-defect');
    }

    public dataForm: FormGroup = new FormGroup({
        title: new FormControl<string>('', [Validators.maxLength(25)], []),
        subtitle: new FormControl<string>('', [Validators.maxLength(40)], []),
        message: new FormControl<string>('', [Validators.maxLength(100)], []),
        image: new FormControl<string>('', [], []),
        color: new FormControl<string>('', [], [])
    });

    public generateUrl(): void
    {
        this.showUrl = false;
        if (this.dataForm.invalid)
            return;

        const currentDomain = window.location.origin;
        if (isDevMode())
            this.url = `${ currentDomain }/message`;
        else
            this.url = `${ currentDomain }/happy-birthday-message/message`;

        this.addToUrl('title');
        this.addToUrl('subtitle');
        this.addToUrl('message');
        this.addToUrl('image');
        this.addToUrl('color');

        this.url = this.url.replaceAll(' ', '%20');
        this.showUrl = true;
    }

    public clearForm(): void {
        this.showUrl = false;
        this.copied = false;

        this.dataForm.reset({
            title: '',
            subtitle: '',
            message: '',
            image: ''
        });
    }

    private addToUrl(field: string): void {
        if (!this.dataForm.value[field])
            return;

        if (this.url.includes('?'))
            this.url = this.url.concat(`&${ field }=${ this.dataForm.value[field] }`);
        else
            this.url = this.url.concat(`?${ field }=${ this.dataForm.value[field] }`);
    }

    public copy(): void {
        navigator.clipboard.writeText(this.url)
            .then( () => {
                this.copied = true;
                this.showCopyAlert();
            })
            .catch( () => this.copied = false);
    }

    public showCopyAlert() {
        this.snackBar.open("¡Copiado en el portapapeles!", "Cerrar");
    }

    public selectColor(event: any): void {
        this.dataForm.controls['color'].setValue(event.value);
    }

}
