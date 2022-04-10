import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventMatrixComponent } from './event-matrix/event-matrix.component';
import {UsersFormComponent} from './users-form/users-form.component';
import { UnitOfMeasuringsFormComponent } from './unit-of-measurings-form/unit-of-measurings-form.component';
import { SearchEventComponent } from './search-event/search-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EventsFormComponent } from './events-form/events-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: ListEventComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'event-matrix', component: EventMatrixComponent},
  { path: 'users-form', component: UsersFormComponent },
  { path: 'unit-of-measurings-form', component: UnitOfMeasuringsFormComponent},
  { path: 'search-event', component: SearchEventComponent},
  { path: 'create-event', component: CreateEventComponent},
  { path: 'terms', component: TermsOfUseComponent},
  { path: 'unit-of-measurings-form', component: UnitOfMeasuringsFormComponent },
  { path: 'admin-form', component: AdminPageComponent },
  { path: "events-form", component: EventsFormComponent },
  { path: 'categories-form', component: CategoriesFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
