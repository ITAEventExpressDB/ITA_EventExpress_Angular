import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { UsersFormComponent } from './users-form/users-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ListEventComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
