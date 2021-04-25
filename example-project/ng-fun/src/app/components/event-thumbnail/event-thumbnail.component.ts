import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from 'src/app/models/event';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input()
  event!: IEvent;
  @Output() votingClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleUpvote() {
    // console.log('Upvoted!!!');
    this.votingClick.emit('Upvoted');
  }

  handleDownVote() {
    // console.log('DownVoted!!');
    this.votingClick.emit('Downvoted');
  }

  isEarlyStart() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };

    //or
    // if(this.event && this.event.time === '8:00 am')
      //  return ['green','bold'];
    // return [];
  }
}
