import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { MyToolsRoutingModule } from './mytools-routing.module';

@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MyToolsRoutingModule,
  ],
  exports: [ToolsComponent],
})
export class MytoolsModule {}
