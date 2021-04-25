import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event!:IEvent;
  constructor(private eventServ:EventService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id= +this.route.snapshot.params['id'];
    this.event=this.eventServ.getEvent(id);
  }

}
