import { TestBed } from '@angular/core/testing';

import { EventCreateRouteDeactivatorService } from './event-create-route-deactivator.service';

describe('EventCreateRouteDeactivatorService', () => {
  let service: EventCreateRouteDeactivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCreateRouteDeactivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
