import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bl-my-posts',
  templateUrl: './myPosts.component.html',
  styleUrls: ['./myPosts.component.scss'],
})
export class MyPostsComponent implements OnInit {
  slug!: string | null;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initializeValues();
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
  getApiUrl() {
    return `articles?author=${this.slug}`;
  }
}
