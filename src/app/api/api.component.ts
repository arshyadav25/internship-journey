import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SerivesService } from '../serives.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  posts: any = [];
  filteredposts: any = []

  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('midSection') midSection: ElementRef;
  
  constructor(private data: SerivesService, private router: Router) { }

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.data.getlogindetils().subscribe((res) => {
      this.posts = res;
      this.filteredposts = [...this.posts];
      console.log(this.posts)
    });
  }


  submit(data) {
    this.data.getDummyData(data).subscribe((res) => {
        if(res){
          this.router.navigate(['/matiral'])
          this.data.changeData(res);
        }
    })
    console.log(this.data)
  }
  ngAfterViewInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll() {
    const navbarElement = this.navbar.nativeElement;
    const midSectionElement = this.midSection.nativeElement;

    const midPosition = midSectionElement.getBoundingClientRect().top;

    if (midPosition <= 0) {
      // When the mid section reaches the top of the viewport
      navbarElement.style.background = 'rgba(184, 217, 235, 1)'; // Solid background
    } else {
      navbarElement.style.background = 'rgba(184, 217, 235, 0.4)'; // Transparent background
    }
  }
  // api.component.ts
// submit(dataUrl: string) {
//   this.router.navigate(['/matiral'], {
//     queryParams: { name: dataUrl }
//   });
// }
  
}

