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
  common=[
    {img:'https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/6792312eb7130ce42ca98c25_feature-01.svg',
      title:'Well maintained vehicles',
      desc:'  All our cars are well-maintained and regularly serviced,ensuring safe and smooth driving.'},
    {img:'https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/67502a4db4828ad6c7f95f47_feature-04.svg',
      title:'Well maintained vehicles',
      desc:'  All our cars are well-maintained and regularly serviced,ensuring safe and smooth driving.'},
    {img:'https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/67502a4da12a058ea3436e0e_feature-03.svg',
      title:'Well maintained vehicles',
      desc:'  All our cars are well-maintained and regularly serviced,ensuring safe and smooth driving.'},
    {img:'https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac/67502a4df18d537616f62575_feature-02.svg',
      title:'Well maintained vehicles',
      desc:'  All our cars are well-maintained and regularly serviced,ensuring safe and smooth driving.'},
  ]
  
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
     
      navbarElement.style.background = 'rgba(184, 217, 235, 1)'; 
    } else {
      navbarElement.style.background = 'rgba(184, 217, 235, 0.4)'; 
    }
  }
 
}

