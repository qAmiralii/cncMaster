import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PrivateNavComponent } from './app/navigation/private-nav/ui/private-nav.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
