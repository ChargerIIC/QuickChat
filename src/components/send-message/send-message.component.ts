import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SendMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'send-message',
  templateUrl: 'send-message.component.html'
})
export class SendMessageComponent {

  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

  content: string;

  constructor() {
  }

  send(){
    this.sendMessage.emit(this.content);
    this.content = "";
  }
}
