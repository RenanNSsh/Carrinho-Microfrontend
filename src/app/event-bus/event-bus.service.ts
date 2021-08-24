import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  userEventBus: BehaviorSubject<User | null> = (window as any).UserEventBus;

  constructor() {


  }
}
