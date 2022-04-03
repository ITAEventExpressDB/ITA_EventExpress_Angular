import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListEventComponent } from './list-event/list-event.component';
import {UsersFormComponent} from './users-form/users-form.component'

const routes: Routes = [
  { path: '', redirectTo: "/landing", pathMatch: "full"},
  { path: 'landing', component: ListEventComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'users-form', component: UsersFormComponent },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
