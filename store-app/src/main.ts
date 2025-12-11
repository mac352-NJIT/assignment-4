import { AppRoot } from './app/app-root';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppRoot, {
  providers: [
    provideRouter(routes)
  ]
});
