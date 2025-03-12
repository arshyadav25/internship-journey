import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { transition, animate, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.scss'],
  animations: [
    trigger('textFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
      ])
    ]),
    // trigger('textFade1', [
    //   transition(':enter', [
    //     style({ opacity: 0, transform: 'translateX(20px)' }),
    //     animate('1s ease-in', style({ opacity: 1, transform: 'translateX(0px)' }))
    //   ]),
    //   transition(':leave', [
    //     animate('2s ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
    //   ])
    // ])

  ]

})

export class DisneyComponent implements OnInit {
    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef;
  @ViewChild('scrollContainer2', { static: false }) scrollContainer2!: ElementRef;
  @ViewChild('scrollContainer3', { static: false }) scrollContainer3!: ElementRef;
  showIcon: boolean = false;
  showIcon2: boolean = true;
  showIcon1: boolean = false;
  isSidebarOpen = false;
  innerWidth: number;
 



  allimages = [
    { image: "assets/image/image2/1736922335797-v.avif" },
    { image: "assets/image/image2//1734579663679-v.webp" },
    { image: "assets/image/image2//1739281306245-v.avif" },
    { image: "assets/image/image2//1731484480596-v.webp" },
    { image: "assets/image/image2//1729240563075-v.webp" },
    { image: "assets/image/image2//1729134893052-v.webp" },
    { image: "assets/image/image2//1728938566127-v.webp" },
    { image: "assets/image/image2//1725561465347-v.webp" },
    { image: "assets/image/image2//1714406940138-v.webp" },


  ]


  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.handleScreenSize();
  }
  fun(e) {
    console.log(e.returnValue);
    this.showIcon = e.returnValue;
  }

  fun1(e) {
    this.showIcon = false
  }



  same(event: Event) {
    this.showIcon2 = false;
    this.showIcon1 = true;
  }

  same1(event: Event) {
    this.showIcon2 = true;
    this.showIcon1 = false;
  }
  toggleSidebar() {
    if (this.innerWidth <= 767) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      console.log('i dotn know');
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
    this.handleScreenSize();
  }

  handleScreenSize(): void {
    if (this.innerWidth <= 767) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  scrollLeft3() {
    this.scrollContainer3.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight3() {
    this.scrollContainer3.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }


}