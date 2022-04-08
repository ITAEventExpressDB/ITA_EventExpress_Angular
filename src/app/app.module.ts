import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule } from '@angular/forms';
import { UnitOfMeasuringsFormComponent } from './unit-of-measurings-form/unit-of-measurings-form.component';
import { EventMatrixComponent } from './event-matrix/event-matrix.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ListEventComponent,
    AdminPageComponent,
    UsersFormComponent,
    UnitOfMeasuringsFormComponent,
    EventMatrixComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
