import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { MessageService } from './services/messageService.ts';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  MessageService, // Add it globaly
  disableDeprecatedForms(),
  provideForms()
])