import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  images: string[] = [
    '/img/s1.png',
    '/img/s2.png',
    '/img/s3.png',
    '/img/s4.png',
    '/img/s5.png',

  ];
  currentSlide = 0;
  broBadi: any;

  startAutoSlide(): void {
    this.broBadi = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }


  ngOnDestroy(): void {
    clearInterval(this.broBadi);
  }
  ngOnInit(): void {
    this.startAutoSlide();
  }
}

