import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
 
import { ArticleFormComponent } from './components/articleForm/articleForm.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
  providers: [],
})
export class ArticleFormModule {}
