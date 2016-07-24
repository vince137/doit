import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home.component';
import { LoginComponent }  from './login.component';
import { SignupComponent } from './signup.component';
import { ConfirmationComponent } from './confirmation.component';
import { dashboardComponent } from './dashboard.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, userLogin: false },
  { path: 'signup', component: SignupComponent, userLogin: false },
  { path: 'confirmation/:token', component: ConfirmationComponent, userLogin: false },
  { path: 'dashboard', component: dashboardComponent, userLogin: true }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];