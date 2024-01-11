import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anp';

  msg: string = 'msg from parent';
  msg2:string=''
  onClickk(name: string) {
    this.msg2=name
  }
}
