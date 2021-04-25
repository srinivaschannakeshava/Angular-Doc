import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoute } from './user-route';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoute)
  ]
})
export class UserModule { }
