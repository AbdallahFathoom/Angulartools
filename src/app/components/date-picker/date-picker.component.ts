import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatYYYYDDMM } from 'src/app/constants/globalMethods';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() min: Date;
  @Input() FGN: FormGroup;
  @Input() FCN: string;
  @Input() filteredDates: Date[] = [];
  constructor() {}

  ngOnInit(): void {
    if (this.FGN.value[this.FCN]) {
      this.FGN.controls[this.FCN].setValue(new Date(this.FGN.value[this.FCN]));
    }
  }

  getFilteredDates = (d: Date): boolean | any => {
    if (d) {
      const time = d.getTime();
      return !this.filteredDates.find((x: Date) => x.getTime() == time);
    }
  };

  onDateChange = (data) =>
    this.FGN.controls[this.FCN].setValue(formatYYYYDDMM(data.value));
}
