import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from '../services/cases.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css'],
})
export class CasesDetailsComponent implements OnInit {
  id: string | null;
  caseDetails: any;
  form: FormGroup;
  htmlContent1: any;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '200px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '14px',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
  };

  constructor(
    private route: ActivatedRoute,
    private casesService: CasesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.form = this.formBuilder.group({
      signature: ['', Validators.required],
    });

    this.casesService.getCaseById(this.id).subscribe((response) => {
      console.log('case details:', response.data);
      this.caseDetails = response.data;
      this.htmlContent1 = this.caseDetails?.description;
    });
  }
}
