import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventService } from './services/event.service';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { LoginComponent } from './common/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventCreateComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [ EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
