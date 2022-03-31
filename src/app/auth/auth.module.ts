import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.services';
import { reducers } from './store/reducers';
import { LoginComponent } from './components/login/login.component';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';
import { LogoutEffect } from './store/effects/logout.effect';
import { LocalStorageService } from '../shared/services/localStorage.service';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      LogoutEffect,
    ]),
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, LocalStorageService],
})
export class AuthModule {}
