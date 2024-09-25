import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(HttpClientModule),
        importProvidersFrom(MatSnackBarRef),
        provideAnimations(),
        provideRouter(routes),
    ]
};
