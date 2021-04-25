import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'src/app/common/services/toastr.service';
import { IEvent } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  public events!:IEvent[] ;


  constructor(private route:ActivatedRoute,private toastServ:ToastrService) {

   }

  ngOnInit(): void {
    this.events=this.route.snapshot.data['events'];
  }

  handleVotingEvent(e:any){
    console.log(e);
  }

  displayTost(event:any){
    this.toastServ.successMessage(event.name);

  }

}
