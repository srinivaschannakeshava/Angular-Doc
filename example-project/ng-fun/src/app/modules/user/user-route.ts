import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const UserRoute: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'profile' }
];
