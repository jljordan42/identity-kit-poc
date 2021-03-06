import { Component, OnInit, Input } from '@angular/core';
import { IFields } from '../view/view.component';

@Component({
  selector: 'waa-add-user-preview',
  template: `
    <waa-card-toolbar title="PREVIEW: {{ email }}" color="warning">
    </waa-card-toolbar>
    <mat-card>
      <mat-card-header color="accent" [title]="email">
        <mat-icon mat-card-avatar>
          person
        </mat-icon>
        <mat-card-subtitle *ngIf="firstName && lastName">
          {{ firstName }} {{ lastName }}</mat-card-subtitle
        >
        <!-- if wanted
        <mat-card-subtitle>{{ link }}</mat-card-subtitle>
        -->
        <mat-card-subtitle
          ><ion-badge color="tertiary">{{
            state
          }}</ion-badge></mat-card-subtitle
        >
      </mat-card-header>
      <mat-card-content>
        <ion-list
          ><waa-card-list-item
            *ngFor="let f of fields"
            [label]="f.key | titlecase"
            [value]="f.value"
          ></waa-card-list-item>
        </ion-list>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./add-user-preview.component.scss']
})
export class AddUserPreviewComponent implements OnInit {
  @Input() name: string;
  @Input() state: string;
  @Input() fields: IFields[];
  @Input() email: string;
  @Input() link: string;
  @Input() firstName: string;
  @Input() lastName;

  constructor() {}

  ngOnInit() {}
}
