import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() messageFromParent: string = '';

  @Output() outt = new EventEmitter<any>();

  msgFromChild: string = 'msg from child';

  onClick() {
    this.outt.emit(this.msgFromChild);
  }
}
