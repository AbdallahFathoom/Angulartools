import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [ButtonComponent, TextFieldComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, TextFieldComponent],
})
export class SharedModule {}
