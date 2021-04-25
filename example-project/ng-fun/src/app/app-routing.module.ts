import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { EventCreateRouteDeactivatorService } from './common/services/event-create-route-deactivator.service';
import { EventRouteActivatorService } from './common/services/event-route-activator.service';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventResolveService } from './services/resolve/event-resolve.service';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"events",component:EventsListComponent,resolve:{events:EventResolveService}},
  {path:"events/new",component:EventCreateComponent,canDeactivate:[EventCreateRouteDeactivatorService]},
  {path:"events/:id",component:EventDetailsComponent,canActivate:[EventRouteActivatorService]},
  {path:"404",component:NotFoundComponent},
  {path:"",redirectTo:"/events",pathMatch:"full"},
  {path:"user",loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
