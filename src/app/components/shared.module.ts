import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { MatSelectModule } from '@angular/material/select';
import { DropDownSelectComponent } from './drop-down-select/drop-down-select.component';
import { LoaderComponent } from './loader/loader.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TextFieldComponent,
    DropDownSelectComponent,
    LoaderComponent,
    TextAreaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  exports: [
    ButtonComponent,
    TextFieldComponent,
    DropDownSelectComponent,
    LoaderComponent,
    TextAreaComponent,
  ],
})
export class SharedModule {}
