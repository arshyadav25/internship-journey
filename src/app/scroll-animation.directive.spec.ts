import { ElementRef, Renderer2 } from '@angular/core';
import { ScrollAnimationDirective } from './scroll-animation.directive';

describe('ScrollAnimationDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {} as ElementRef;
    const rendererMock = {} as Renderer2;
    const directive = new ScrollAnimationDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
