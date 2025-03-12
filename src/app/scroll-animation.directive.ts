import { Directive,ElementRef,HostListener,Renderer2  } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialState();
  }

  private setInitialState() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.6s ease-out, transform 0.6s ease-out');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }
  }

}
