import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventMatrixComponent } from './event-matrix/event-matrix.component';
import {UsersFormComponent} from './users-form/users-form.component';
import { UnitOfMeasuringsFormComponent } from './unit-of-measurings-form/unit-of-measurings-form.component';


const routes: Routes = [
  { path: '', redirectTo: "/landing", pathMatch: "full"},
  { path: 'landing', component: ListEventComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'event-matrix', component: EventMatrixComponent},
  { path: 'users-form', component: UsersFormComponent },
  {path: 'unit-of-measurings-form', component: UnitOfMeasuringsFormComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
