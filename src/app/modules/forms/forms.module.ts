import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { SharedModule } from 'src/app/components/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class FormsModule {}
