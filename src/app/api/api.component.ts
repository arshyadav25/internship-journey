import { Component, OnInit } from '@angular/core';
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


  // api.component.ts
// submit(dataUrl: string) {
//   this.router.navigate(['/matiral'], {
//     queryParams: { name: dataUrl }
//   });
// }
  
}

