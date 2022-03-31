import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'bl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
