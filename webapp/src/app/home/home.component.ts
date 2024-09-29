import { CommonModule } from "@angular/common";
import { Component, isDevMode } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent
{
    public copied: boolean = false;
    public showUrl: boolean = false;
    public url: string = 'message';
    public selectedColor: string = '';
    public colors = {
        'defect': 'Defecto',
        'blue': 'Azul',
        'green': 'Verde',
        'pink': 'Rosa',
        'purple': 'Morado',
        'red': 'Rojo',
        'yellow': 'Amarillo',
    }

    constructor(private snackBar: MatSnackBar) {
        document.documentElement.classList.add('bg-defect');
    }

    public dataForm: FormGroup = new FormGroup({
        title: new FormControl<string>('', [Validators.maxLength(14)], []),
        subtitle: new FormControl<string>('', [Validators.maxLength(25)], []),
        message: new FormControl<string>('', [Validators.maxLength(100)], []),
        image: new FormControl<string>('', [], []),
        color: new FormControl<string>('', [], [])
    });

    getColors() {
        return Object.entries(this.colors).map(([key, value]) => ({ key, value }));
    }

    public generateUrl(): void
    {
        this.showUrl = false;
        if (this.dataForm.invalid)
            return;

        const currentDomain = window.location.origin;

        this.addToUrl('title');
        this.addToUrl('subtitle');
        this.addToUrl('message');
        this.addToUrl('image');
        this.addToUrl('color');

        if (isDevMode())
            this.url = `${ currentDomain }/${ this.url }`.replaceAll(' ', '%20');
        else
            this.url = `${ currentDomain }/happy-birthday-message/${ this.url }`.replaceAll(' ', '%20');
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
