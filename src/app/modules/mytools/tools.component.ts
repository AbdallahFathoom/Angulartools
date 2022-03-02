import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { emailPattern } from 'src/app/constants/validators';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(emailPattern),
      ]),
    });
  }

  isValid = (controlName: any) =>
    this.form.controls[controlName].touched &&
    this.form.controls[controlName].errors
      ? // &&
        // this.form.controls[controlName].valid
        true
      : false;
}
