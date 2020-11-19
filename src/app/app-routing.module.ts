import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'support', component: SupportComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
