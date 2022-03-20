import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () =>
          import('./modules/forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'mytools',
        loadChildren: () =>
          import('./modules/mytools/mytools.module').then(
            (m) => m.MytoolsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
