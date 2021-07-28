import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'carrinho-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carrinho';

  @Input() nomeProduto = '';

  @Output() comprado = new EventEmitter<boolean>()

}
