
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRowhighlights]'
})
export class RowhighlightsDirective {

  constructor(public elem:ElementRef, public render: Renderer2) {
   
  }
  @Input('color') color='#ddd';

  @HostListener('mouseenter')
  onMouserEnter=()=>{
   this.render.setStyle(this.elem.nativeElement, 'background-color', this.color )
  }
  @HostListener('mouseleave')
  onMouserLeave=()=>{
   this.render.setStyle(this.elem.nativeElement, 'background-color','' )
  }

}
