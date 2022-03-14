import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { MytoolsModule } from './modules/mytools/mytools.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { FormsComponent } from './modules/forms/forms.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, FormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MytoolsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
