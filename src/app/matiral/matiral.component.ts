import { Component, ElementRef, EventEmitter, Inject, OnInit, ViewChild } from '@angular/core';
import { SerivesService } from '../serives.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-matiral',
  templateUrl: './matiral.component.html',
  styleUrls: ['./matiral.component.scss'],
})
export class MatiralComponent implements OnInit {
  post: any = [];
  alldata: any = [];
  title: any = [];
  filteredposts: any = [];
  datas: any = [];
  isSidebarOpen: boolean = false;
  id: any;
  @ViewChild('main') main: ElementRef;


  constructor(private api: SerivesService, private preview: MatDialog, public dialogRef: MatDialogRef<MatiralComponent>) {

  }

  count: any[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.api.data.subscribe((a: any) => {
      console.log(a);
      localStorage.setItem('newdata', JSON.stringify(a))
      // this.datas = a.limit
    });
    this.datas = JSON.parse(localStorage.getItem('newdata'));

    console.log('this is get data', this.datas.products);
    this.alldata = this.datas


  }
  viewmore(item: any) {
    if (!this.preview) {
      console.error('MatDialog instance is undefined.');
      return;
    }

    try {
      const dialogRef = this.preview.open(DialogComponent, {
        height: '600px',
        width: '900px',
        data: item,
        panelClass: 'custom-dialog-container'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed', result);
      });
    } catch (error) {
      console.error('Error opening dialog:', error);
    }
  }
  ngAfterViewInit() {
    this.main.nativeElement.scrollTop = 0;
  }
  if (item) {

    
  }

}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./matiral.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      state('void', style({ opacity: 0, transform: 'scaleX(1)' })),
      transition(':enter', [
        animate('3s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('3s ease-in', style({ opacity: 0, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class DialogComponent implements OnInit {
  same:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {
    console.log(data)
    this.same= this.data;
  }
  ngOnInit(): void {
    //console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }
 


}