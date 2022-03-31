import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

import { loginAction } from '../../store/actions/login.action';
import {
  authFeatureSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'bl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean | null>;
  backendErrors$!: Observable<ServerErrorsInterface | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
