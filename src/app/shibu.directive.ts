import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: `[sarasu]`,
})
export class SarasuDirective implements OnInit {
  constructor(private sui: ElementRef, private pro: Renderer2) {}
  ngOnInit(): void {
    this.prop('purple');
    this.prop1('white');

  }
  private prop(color: string) {
    this.pro.setStyle(this.sui.nativeElement, 'backgroundColor', color);
  }
  private prop1(color: string) {
    this.pro.setStyle(this.sui.nativeElement, 'color', color);
  }
}
