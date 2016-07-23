import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { LoginComponent }  from './login.component';
import { SignupComponent } from './signup.component';
import { ConfirmationComponent } from './confirmation.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'confirmation/:token', component: ConfirmationComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];