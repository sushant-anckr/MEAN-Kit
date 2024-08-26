import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SelectComponent } from './components/select/select.component';
import { HighchartsComponent } from './components/highcharts/highcharts.component';
import { D3chartsComponent } from './components/d3charts/d3charts.component';
import { D3chartsAgComponent } from './components/d3charts-ag/d3charts-ag.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TexteditorQuillComponent } from './components/texteditor-quill/texteditor-quill.component';
import { QuillComponent } from './components/quill/quill.component';

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
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trykit';
}
