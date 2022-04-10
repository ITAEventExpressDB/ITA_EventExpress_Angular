import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListEventComponent } from './list-event/list-event.component';
import {UsersFormComponent} from './users-form/users-form.component'
import { UnitOfMeasuringsFormComponent } from './unit-of-measurings-form/unit-of-measurings-form.component';
import { SearchEventComponent } from './search-event/search-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '', redirectTo: "/landing", pathMatch: "full"},
  { path: 'landing', component: ListEventComponent},
  { path: 'about', component: AboutUsComponent },
  { path: 'users-form', component: UsersFormComponent },
  { path: 'unit-of-measurings-form', component: UnitOfMeasuringsFormComponent},
  { path: 'search-event', component: SearchEventComponent},
  { path: 'create-event', component: CreateEventComponent},
  { path: 'terms', component: TermsOfUseComponent},
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
