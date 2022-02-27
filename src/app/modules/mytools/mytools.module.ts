import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  declarations: [ToolsComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class MytoolsModule {}
