import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators'
import { IEvent } from 'src/app/models/event';
import { EventService } from '../event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolveService implements Resolve<IEvent[]> {

  constructor(private eventServe:EventService) { }

  resolve(){
    return of(this.eventServe.getEvents()).pipe(delay(1500));
  }
}
