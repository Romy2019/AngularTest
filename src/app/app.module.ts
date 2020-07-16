import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {HomeComponent} from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './component/list/list.component';
import { LogInComponent } from './component/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
