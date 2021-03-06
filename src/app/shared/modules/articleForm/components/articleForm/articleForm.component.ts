import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

@Component({
  selector: 'bl-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues')
  initialValuesProps!: ArticleInputInterface | null;
  @Input('isSubmitting') isSubmittingProps!: boolean | null;
  @Input('errors')
  errorsProps!: ServerErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps?.title,
      description: this.initialValuesProps?.description,
      body: this.initialValuesProps?.body,
      tagList: this.initialValuesProps?.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
