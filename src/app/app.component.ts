import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighchartsComponent } from './components/charts/highcharts/highcharts.component';
import { D3chartsComponent } from './components/charts/d3charts/d3charts.component';
import { D3chartsAgComponent } from './components/charts/d3charts-ag/d3charts-ag.component';
import { TextEditorComponent } from './components/text-editorr/text-editor/text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuillComponent } from './components/text-editorr/quill/quill.component';
import { KolkovEditorComponent } from "./components/text-editorr/kolkov-editor/kolkov-editor.component";
import { TexteditorQuillComponent } from './components/text-editorr/texteditor-quill/texteditor-quill.component';
import { MultiSelectComponent } from './components/multi-select-dropdown/multi-select/multi-select.component';
import { SelectComponent } from './components/multi-select-dropdown/select/select.component';
import { DatePickerComponent } from "./components/Dates/date-picker/date-picker.component";
import { MatreialDatesComponent } from './components/Dates/matreial-dates/matreial-dates.component';
import {  TranslateModule } from '@ngx-translate/core';
import { PopupDatePickerComponent } from "./components/Dates/popup-date-picker/popup-date-picker.component";
import { DateTimeService } from './services/date-time/date-time.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToasterComponent } from "./components/toaster/toaster.component";
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { NgxSoonerComponent } from "./components/ngx-sooner/ngx-sooner.component";
import { TooltipchartComponent } from "./components/charts/tooltipchart/tooltipchart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CKEditorModule,
    FormsModule,
    MultiSelectComponent,
    SelectComponent,
    HighchartsComponent,
    D3chartsComponent,
    D3chartsAgComponent,
    TextEditorComponent,
    TexteditorQuillComponent,
    ReactiveFormsModule,
    QuillComponent,
    KolkovEditorComponent,
    DatePickerComponent,
    MatreialDatesComponent,
    TranslateModule,
    PopupDatePickerComponent,
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDatepickerModule,
    ToasterComponent,
    NgxSonnerToaster,
    NgxSoonerComponent,
    TooltipchartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trykit';
  protected readonly toast = toast;

  groupData = [
    {
      key: new Date(2019, 1, 7),
      values: [
        { grpName: 'GBP', grpValue: 1600 },
        { grpName: 'EUR', grpValue: 1520 },
        { grpName: 'USD', grpValue: 480 },
      ],
    },
    {
      key: new Date(2019, 1, 14),
      values: [
        { grpName: 'GBP', grpValue: 1460 },
        { grpName: 'EUR', grpValue: 2300 },
        { grpName: 'USD', grpValue: 580 },
      ],
    },
    {
      key: new Date(2019, 1, 21),
      values: [
        { grpName: 'GBP', grpValue: 320 },
        { grpName: 'EUR', grpValue: 900 },
        { grpName: 'USD', grpValue: 1500 },
      ],
    },
    {
      key: new Date(2019, 1, 28),
      values: [
        { grpName: 'GBP', grpValue: 410 },
        { grpName: 'EUR', grpValue: 1550 },
        { grpName: 'USD', grpValue: 600 },
      ],
    },
  ];

}
