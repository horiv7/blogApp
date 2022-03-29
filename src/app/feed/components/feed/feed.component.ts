import { Component } from '@angular/core';

@Component({
  selector: 'bl-feed',
  templateUrl: './Feed.component.html',
  styleUrls: ['./Feed.component.scss'],
})
export class FeedComponent {
  apiUrl = '/articles';
  constructor() {}
}
