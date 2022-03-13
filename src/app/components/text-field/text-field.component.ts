import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {
  // declaring the label
  @Input() label: string = 'Text';
  //  form group name
  @Input()
  FGN!: FormGroup;
  // from control name
  @Input()
  FCN!: string;
  @Input() step: string;
  @Input() min: number | string;
  @Input() max: number;
  @Input() preSetValue: string;

  // declaring the type of the edit box
  // 1- text
  // 2- number
  // 3- email
  // 4- password
  // 5- date
  @Input() inputType: string = 'text';
  @Output() changeEmitter = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  emitChange = () => this.changeEmitter.emit(true);
}
