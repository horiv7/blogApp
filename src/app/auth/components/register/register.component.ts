import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

import { registerAction } from '../../store/actions/register.action';
import {
  authFeatureSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'bl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean | null>;
  serverErrors$!: Observable<ServerErrorsInterface | null>;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select(authFeatureSelector),
      map((r) => r.isSubmitting)
    );
    this.serverErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
