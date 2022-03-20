import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss'],
})
export class PhoneFieldComponent implements OnInit {
  CountryISO = CountryISO;

  //  form group name
  @Input()
  FGN!: FormGroup;
  // from control name
  @Input()
  FCN!: string;

  constructor() {}

  ngOnInit(): void {}
}
