import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventBusService } from './event-bus/event-bus.service';
import { User } from './user/user.model';

@Component({
  selector: 'carrinho-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventBusService: EventBusService) {

  }

  user: User | null = null;

  @Input() nomeProduto = '';

  @Output() comprado = new EventEmitter<boolean>()


  ngOnInit() {
    this.eventBusService.userEventBus.subscribe(user => {
      this.user = user;
    });
  }

}
