import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker'
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DpDatePickerModule,OverlayModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  selectedDate: string='';
  formattedDate: string='';

  // Whenever the selected date changes
  onDateChange() {
    if (this.selectedDate) {
      // Format or manipulate the date as needed
      this.formattedDate = this.selectedDate; // Placeholder for further manipulation
    }
  }
}
