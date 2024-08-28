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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CKEditorModule,
    MultiSelectComponent,
    SelectComponent,
    HighchartsComponent,
    D3chartsComponent,
    D3chartsAgComponent,
    TextEditorComponent,
    TexteditorQuillComponent,
    QuillComponent,
    KolkovEditorComponent,
    DatePickerComponent,
    MatreialDatesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trykit';
}
