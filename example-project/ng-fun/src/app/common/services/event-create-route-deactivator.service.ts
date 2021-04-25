import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EventCreateComponent } from 'src/app/components/event-create/event-create.component';

@Injectable({
  providedIn: 'root'
})
export class EventCreateRouteDeactivatorService implements CanDeactivate<EventCreateComponent>{

  constructor() { }

  canDeactivate(){
    return true;
  }
}
