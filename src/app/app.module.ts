import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from "./service/user.service";
import { UserComponent } from './user/user.component';
import {Routes, RouterModule} from "@angular/router";
import {UsersResolver} from "./user/users-resolver";
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserResolver} from "./user-details/user-resolver";

const appRoutes: Routes = [
  { path: '', component: UserComponent , resolve : { users: UsersResolver } },
  { path: 'user', component: UserComponent, resolve : { users: UsersResolver } },
  { path: 'user/:id', component: UserDetailsComponent, resolve : { user: UserResolver } },
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    UsersResolver,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
