import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {ListComponent} from './component/list/list.component';
import {LogInComponent} from './component/log-in/log-in.component';

const routes: Routes = [
  { path: 'logIn', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  {path :'list', component:ListComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }