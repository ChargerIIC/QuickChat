import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello SendMessageComponent Component');
    this.text = 'Hello World';
  }

}
