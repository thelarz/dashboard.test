import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HubService } from './hub.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
