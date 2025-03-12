import { ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NetflixComponent implements OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef;
  @ViewChild('scrollContainer2', { static: false }) scrollContainer2!: ElementRef;
  @ViewChild('scrollContainer3', { static: false }) scrollContainer3!: ElementRef;
  @ViewChild('scrollContainer4', { static: false }) scrollContainer4!: ElementRef;
  isScrolled = false;
  isSidebarOpen = false;
  innerWidth: number;



  allimage = [
    { image: "assets/netflix.h.image/image 1.png" },
    { image: "assets/netflix.h.image/image 2.png" },
    { image: "assets/netflix.h.image/image 3.png" },
    { image: "assets/netflix.h.image/image 6.png" },
    { image: "assets/netflix.h.image/Thumbnail.png" },
    { image: "assets/netflix.h.image/Thumbnail.png" },
    { image: "assets/netflix.h.image/image 1.png" },
    { image: "assets/netflix.h.image/image 2.png" },
    { image: "assets/netflix.h.image/image 1.png" },
    { image: "assets/netflix.h.image/image 2.png" },
    { image: "assets/netflix.h.image/image 3.png" },
    { image: "assets/netflix.h.image/image 6.png" },
    { image: "assets/netflix.h.image/Thumbnail.png" },
    { image: "assets/netflix.h.image/Thumbnail.png" },
    { image: "assets/netflix.h.image/image 1.png" },
    { image: "assets/netflix.h.image/image 2.png" },



  ]
  allimage1 = [
    { image: "assets/netflix.h.image/AAAABaB-Us0IQLtpuJfdiSvx2liq1TKucs8wQeG-ZOpjoO8FDWVka8deQGgv09ZxXG8Df5GGFiaAAmepirCx2xCPn8pz7IAqIzVH7c8.webp" },
    { image: "assets/netflix.h.image/AAAABQlYSwSthI3U7Ivl95cUxezQ0bxLdRmO-rcs-ZlCs-tnF7_HTkOjFndlGRrvGm9a_rW_Rx2Oq-7sfNHedg8kZVI24OeUVXeoNBY.webp" },
    { image: "assets/netflix.h.image/AAAABRIBZd1izd_9pOf_yui4KX92aoA0KTDfVZqGnFElHdeqTARAer5a9cKqTjFjx0LQSRViQcHRDluEZ3JthsvlJr85CqwAyVXh0K8 (1).webp" },
    { image: "assets/netflix.h.image/AAAABRIBZd1izd_9pOf_yui4KX92aoA0KTDfVZqGnFElHdeqTARAer5a9cKqTjFjx0LQSRViQcHRDluEZ3JthsvlJr85CqwAyVXh0K8.webp" },
    { image: "assets/netflix.h.image/AAAABUohs3VsR3SytOaoo8FmusFytN_hBVzDeyCbBuIVit5uIaCTZeUDRbGrG1j8lwAM36I3MZkPYT6Aa4vloCawBVZI5AdLyweJcP8.webp" },
    { image: "assets/netflix.h.image/AAAABYF6yV9z3iMRz9r2GpIesStlqjIAgdbTx3ePKWQLX_VgFR53Z1IP1X2Q9prfZnmSQImBmzLAhEuTewWfZk4MxPxB4Te2EMNRI61DJaIaPkhf9uYDrQ1ox7fLk49O5rECCkYs (1).jpg" },
    { image: "assets/netflix.h.image/AAAABYF6yV9z3iMRz9r2GpIesStlqjIAgdbTx3ePKWQLX_VgFR53Z1IP1X2Q9prfZnmSQImBmzLAhEuTewWfZk4MxPxB4Te2EMNRI61DJaIaPkhf9uYDrQ1ox7fLk49O5rECCkYs.jpg" },
    { image: "assets/netflix.h.image/AAAABYstWSrea_lL8g7-wOCuu2Knms2Gjf0LTvZhkWq__5Lec5JnoohcKvRTXHXN0dfj7PccZ7U9pcQ2AOJH6dx-GydOx1dX38QcmmM.webp" },
    { image: "assets/netflix.h.image/AAAABaB-Us0IQLtpuJfdiSvx2liq1TKucs8wQeG-ZOpjoO8FDWVka8deQGgv09ZxXG8Df5GGFiaAAmepirCx2xCPn8pz7IAqIzVH7c8.webp" },
    { image: "assets/netflix.h.image/AAAABQlYSwSthI3U7Ivl95cUxezQ0bxLdRmO-rcs-ZlCs-tnF7_HTkOjFndlGRrvGm9a_rW_Rx2Oq-7sfNHedg8kZVI24OeUVXeoNBY.webp" },
    { image: "assets/netflix.h.image/AAAABRIBZd1izd_9pOf_yui4KX92aoA0KTDfVZqGnFElHdeqTARAer5a9cKqTjFjx0LQSRViQcHRDluEZ3JthsvlJr85CqwAyVXh0K8 (1).webp" },
    { image: "assets/netflix.h.image/AAAABRIBZd1izd_9pOf_yui4KX92aoA0KTDfVZqGnFElHdeqTARAer5a9cKqTjFjx0LQSRViQcHRDluEZ3JthsvlJr85CqwAyVXh0K8.webp" },
    { image: "assets/netflix.h.image/AAAABUohs3VsR3SytOaoo8FmusFytN_hBVzDeyCbBuIVit5uIaCTZeUDRbGrG1j8lwAM36I3MZkPYT6Aa4vloCawBVZI5AdLyweJcP8.webp" },
    { image: "assets/netflix.h.image/AAAABYF6yV9z3iMRz9r2GpIesStlqjIAgdbTx3ePKWQLX_VgFR53Z1IP1X2Q9prfZnmSQImBmzLAhEuTewWfZk4MxPxB4Te2EMNRI61DJaIaPkhf9uYDrQ1ox7fLk49O5rECCkYs (1).jpg" },
    { image: "assets/netflix.h.image/AAAABYF6yV9z3iMRz9r2GpIesStlqjIAgdbTx3ePKWQLX_VgFR53Z1IP1X2Q9prfZnmSQImBmzLAhEuTewWfZk4MxPxB4Te2EMNRI61DJaIaPkhf9uYDrQ1ox7fLk49O5rECCkYs.jpg" },
    { image: "assets/netflix.h.image/AAAABYstWSrea_lL8g7-wOCuu2Knms2Gjf0LTvZhkWq__5Lec5JnoohcKvRTXHXN0dfj7PccZ7U9pcQ2AOJH6dx-GydOx1dX38QcmmM.webp" },



  ]
  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }



  toggleSidebar() {
    if (this.innerWidth <= 767) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      console.log('i dotn know');
      this.isSidebarOpen= false;
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
      this.isSidebarOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 1000;
  }
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
  scrollLeft1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight1() {
    this.scrollContainer1.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
  scrollLeft2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight2() {
    this.scrollContainer2.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
  scrollLeft3() {
    this.scrollContainer3.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight3() {
    this.scrollContainer3.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
  scrollLeft4() {
    this.scrollContainer4.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight4() {
    this.scrollContainer4.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
}
