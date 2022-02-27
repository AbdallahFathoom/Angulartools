import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { ToolsComponent } from './modules/mytools/tools.component';

@NgModule({
  declarations: [AppComponent, ToolsComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
