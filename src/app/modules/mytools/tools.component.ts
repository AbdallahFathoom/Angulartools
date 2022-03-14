import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GENDERS, MALE } from 'src/app/constants/genders';
import { emailPattern } from 'src/app/constants/validators';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  // declare form group
  form: FormGroup;
  genders = GENDERS;
  preSelectGender = MALE;

  // inject form builder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // declare your form group controls
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(emailPattern),
      ]),
      password: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  // checking if the form components are valid
  isValid = (controlName: any) =>
    this.form.controls[controlName].touched &&
    this.form.controls[controlName].errors
      ? true
      : false;
}
