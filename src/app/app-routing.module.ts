import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './modules/mytools/tools.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
