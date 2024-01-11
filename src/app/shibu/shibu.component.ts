import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-shibu',
  templateUrl: './shibu.component.html',
  styleUrls: ['./shibu.component.css'],
})
export class ShibuComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  name = 'Shibinshad';

  ngOnInit(): void {
    console.log('Hello guys!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes is ready');
  }
  ngDoCheck(): void {
    console.log('Docheck is ready');
  }
  ngAfterContentInit(): void {
    console.log('Content in it ready');
  }
  ngAfterContentChecked(): void {
    console.log('content checked is ready');
  }
  ngAfterViewInit(): void {4
    console.log('view init is ready');
  }
  ngAfterViewChecked(): void {
    console.log('view checked is ready');
  }
}
