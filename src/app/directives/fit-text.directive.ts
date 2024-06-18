import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFitText]',
  standalone: true
})
export class FitTextDirective implements AfterViewInit, OnChanges {
  @Input() maxFontSize: number = 100;
  @Input() minFontSize: number = 10;
  @Input() triggerResize: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.resizeText();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['triggerResize']) {
      this.resizeText();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeText();
  }

  private resizeText() {
    const element = this.el.nativeElement;
    const parentWidth = element.parentElement.clientWidth;
    let fontSize = this.maxFontSize;

    this.renderer.setStyle(element, 'font-size', `${fontSize}px`);
    this.renderer.setStyle(element, 'white-space', 'nowrap');

    while (element.scrollWidth > parentWidth && fontSize > this.minFontSize) {
      fontSize -= 1;
      this.renderer.setStyle(element, 'font-size', `${fontSize}px`);
    }
  }
}
