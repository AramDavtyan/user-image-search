import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {
  @Output() closeButtonChange = new EventEmitter();
  constructor() { }
  public handleClose(): void {
    this.closeButtonChange.emit(true);
  }
}
