import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { MatSelectModule } from '@angular/material/select';
import { DropDownSelectComponent } from './drop-down-select/drop-down-select.component';

@NgModule({
  declarations: [ButtonComponent, TextFieldComponent, DropDownSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  exports: [ButtonComponent, TextFieldComponent, DropDownSelectComponent],
})
export class SharedModule {}
