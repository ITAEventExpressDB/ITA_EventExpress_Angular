import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
	{ path: 'aboutUs', component: AboutUsComponent },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
