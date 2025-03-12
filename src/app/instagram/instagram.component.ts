import {  Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],

})
export class InstagramComponent implements OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  system: boolean = true
  innerWidth: number;
  isScrolled = false;
  isSidebarOpen = false;
  isLiked = false;
  toggle = true;
  status = 'Enable';

  constructor() { }
  story_image = [
    { image: "https://w0.peakpx.com/wallpaper/782/763/HD-wallpaper-rainy-night-drops-lake-nature-new-nice-rain-water-weather-wharf.jpg" },
    { image: "https://c4.wallpaperflare.com/wallpaper/307/935/710/autumn-window-rain-rain-drops-wallpaper-preview.jpg" },
    { image: "https://i.pinimg.com/736x/2e/7c/d0/2e7cd0d258a262db0a23906c7f919263.jpg" },
    { image: "https://c1.wallpaperflare.com/preview/618/832/1017/water-drops-drops-of-water-rain-drops.jpg" },
    { image: "https://images.unsplash.com/photo-1525939864518-b53937989bbd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/054/927/587/small/tranquil-rain-shower-on-blooming-lily-pads-in-serene-pond-surrounded-by-natural-greenery-photo.jpg" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/042/195/752/small/ai-generated-rainy-summer-background-free-photo.jpg" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohgvIxu6C3nsZdecZl2Ytpk_0qdjUYAEAHQ&s" },
    { image: "https://w0.peakpx.com/wallpaper/782/763/HD-wallpaper-rainy-night-drops-lake-nature-new-nice-rain-water-weather-wharf.jpg" },
    { image: "https://c4.wallpaperflare.com/wallpaper/307/935/710/autumn-window-rain-rain-drops-wallpaper-preview.jpg" },
    { image: "https://i.pinimg.com/736x/2e/7c/d0/2e7cd0d258a262db0a23906c7f919263.jpg" },
    { image: "https://c1.wallpaperflare.com/preview/618/832/1017/water-drops-drops-of-water-rain-drops.jpg" },
    { image: "https://images.unsplash.com/photo-1525939864518-b53937989bbd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/054/927/587/small/tranquil-rain-shower-on-blooming-lily-pads-in-serene-pond-surrounded-by-natural-greenery-photo.jpg" },
    { image: "https://static.vecteezy.com/system/resources/thumbnails/042/195/752/small/ai-generated-rainy-summer-background-free-photo.jpg" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohgvIxu6C3nsZdecZl2Ytpk_0qdjUYAEAHQ&s" },

  ]
  main = [
    {
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohgvIxu6C3nsZdecZl2Ytpk_0qdjUYAEAHQ&s",
      name: "shardul_yadav_16_",
      img2: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?cs=srgb&dl=pexels-andreimike-1271620.jpg&fm=jpg",
      isLiked: false,

    },

    {
      img1: "https://static.vecteezy.com/system/resources/thumbnails/042/195/752/small/ai-generated-rainy-summer-background-free-photo.jpg",
      name: "shardul_yadav_16_",
      img2: "https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg?cs=srgb&dl=pexels-trayproductions-1575861.jpg&fm=jpg",
      isLiked: false,

    },

    {
      img1: "https://static.vecteezy.com/system/resources/thumbnails/054/927/587/small/tranquil-rain-shower-on-blooming-lily-pads-in-serene-pond-surrounded-by-natural-greenery-photo.jpg",
      name: "shardul_yadav_16_",
      img2: "https://rukminim3.flixcart.com/image/850/1000/kqttg280/poster/o/m/b/medium-nature-wallpaper-beautiful-nature-poster-asstore-n11-original-imag4rf9mfzpyyne.jpeg?q=90&crop=false",
      isLiked: false,

    },

    {
      img1: "https://images.unsplash.com/photo-1525939864518-b53937989bbd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "shardul_yadav_16_",
      img2: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
      isLiked: false,

    },

    {
      img1: "https://c1.wallpaperflare.com/preview/618/832/1017/water-drops-drops-of-water-rain-drops.jpg",
      name: "shardul_yadav_16_",
      img2: "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      isLiked: false,

    },

    {
      img1: "https://www.computerhope.com/jargon/h/html.png",
      name: "shardul_yadav_16_",
      img2: "https://i.pinimg.com/564x/f7/e4/10/f7e4102b958a07b29666b65263baca46.jpg",
      isLiked: false,

    },

    {
      img1: "https://www.computerhope.com/jargon/h/html.png",
      name: "shardul_yadav_16_",
      img2: "https://images.pexels.com/photos/16631846/pexels-photo-16631846/free-photo-of-green-leaves-in-rain.jpeg",
      isLiked: false,

    },

    {
      img1: "https://www.computerhope.com/jargon/h/html.png",
      name: "shardul_yadav_16_",
      img2: "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      isLiked: false,

    },



  ]
  data = [
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
    {
      img1: "https://www.computerhope.com/jargon/h/html.png"
    },
  ]

  ngOnInit(): void {
  }

  next() {
    this.system = !this.system;

  }

  toggleSidebar() {
    if (this.innerWidth <= 767) {
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      console.log('i dotn know');
      this.isSidebarOpen = false;
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
    this.scrollContainer.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }
  toggleLike(post: any) {
    post.isLiked = !post.isLiked;
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

}