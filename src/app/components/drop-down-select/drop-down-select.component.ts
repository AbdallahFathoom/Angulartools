import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectData } from 'src/app/constants/interfaces';

@Component({
  selector: 'app-drop-down-select',
  templateUrl: './drop-down-select.component.html',
  styleUrls: ['./drop-down-select.component.css'],
})
export class DropDownSelectComponent implements OnInit {
  constructor() {}

  @Input() placeholder: string = 'Select an option';
  @Input() FGN: FormGroup;
  @Input() FCN: string;
  @Input() data: SelectData[];
  @Input() disabled: boolean = false;
  @Input() multiple: boolean = false;
  @Input() preSetValue: string;

  @Output() changed = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.preSetValue) {
      this.FGN.controls[this.FCN].setValue(this.preSetValue);
    }
  }

  emitChange() {
    this.changed.emit(this.FGN.controls[this.FCN].value);
  }
}
