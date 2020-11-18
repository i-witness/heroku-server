import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
