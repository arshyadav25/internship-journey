import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  isSidebarOpen = false;
  innerWidth: number;
 


  images1 =[
    { image: "assets/image/image.h.youtube/oar2.jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
  
     },
     { image: "assets/image/image.h.youtube/oardefault (3).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
     
     },
    { image: "assets/image/image.h.youtube/oar2 (1).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
     
     },
    { image: "assets/image/image.h.youtube/oar2 (2).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
  
     },
    { image: "assets/image/image.h.youtube/oardefault (1).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
    
     },
    { image: "assets/image/image.h.youtube/oardefault (2).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image3: "2.3M" ,
     
     },
  ]
  images = [
    
    { image: "assets/image/image.b.youtube/hq720 (1).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    { image: "assets/image/image.b.youtube/hq720 (2).jpg" ,
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
    },
    { image: "assets/image/image.b.youtube/hq720 (3).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    { image: "assets/image/image.b.youtube/hq720 (4).jpg" ,
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
    },
    { image: "assets/image/image.b.youtube/hq720 (5).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    { image: "assets/image/image.b.youtube/hq720 (6).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    { image: "assets/image/image.b.youtube/hq720 (7).jpg" ,
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
    },
    { image: "assets/image/image.b.youtube/hq720 (8).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    { image: "assets/image/image.b.youtube/hq720 (9).jpg" ,
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
    },
  { image: "assets/image/image.b.youtube/hq720 (10).jpg",
      image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
      image2: "change" ,
      image3: "2.3M" ,
      image4: "1year ago" 
     },
    ]
     
   
    
    image2 =[
      { image: "assets/image/image.b.youtube/hq720 (11).jpg" ,
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
      },
      { image: "assets/image/image.b.youtube/hq720 (12).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (13).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (14).jpg" ,
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
      },
      { image: "assets/image/image.b.youtube/hq720 (15).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (16).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (17).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (18).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (19).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (20).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (21).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (22).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (23).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (24).jpg",
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
       },
      { image: "assets/image/image.b.youtube/hq720 (25).jpg" ,
        image1:"React & Redux Complete Course (2024) with Projects | Notes | Free Certification",
        image2: "change" ,
        image3: "2.3M" ,
        image4: "1year ago" 
      },
  
    ]
  constructor() {
    this.innerWidth = window.innerWidth;
   }

  ngOnInit(): void {
    this.handleScreenSize();
  }

  toggleSidebar() {
      if (this.innerWidth <= 1200) {
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
      if (this.innerWidth <= 1200) {
        this.isSidebarOpen = false;
      } else {
        this.isSidebarOpen = true;
      }
    }
}
