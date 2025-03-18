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
  alldata: any = [];
  datas: any = [];
  id: any;
  @ViewChild('main') main: ElementRef;
  dialog: any;
  cartCount: number = 0;

  constructor(private api: SerivesService, private preview: MatDialog, public dialogRef: MatDialogRef<MatiralComponent>) {

  }

  count: any[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.api.data.subscribe((a: any) => {
      console.log(a);
      localStorage.setItem('newdata', JSON.stringify(a))
      this.datas = a;
      // this.datas = a.limit
    });
    this.datas = JSON.parse(localStorage.getItem('newdata'));
    this.api.cartItems$.subscribe(items => {
      this.cartCount = items.length;
    });

    console.log('this is get data', this.datas.products);
    this.alldata = this.datas
  }

  viewmore(item: any) {
    console.log(item);
    const dialogRef = this.preview.open(DialogComponent, {
      height: '600px',
      width: '900px',
      data: item,
      panelClass: 'custom-dialog-container'
    });
  }
  ngAfterViewInit() {
    this.main.nativeElement.scrollTop = 10;
  }

  // buynow(item) {  
  //   console.log(item);
  //   const dialogRef = this.preview.open(ShopComponent, {
  //     height: '600px',
  //     width: '900px',
  //     data: item,
  //   });
  // }

  buynow(item: any) {
    this.api.addToCart(item);
    this.openCart();
  }
  openCart() {
    this.preview.open(ShopComponent, {
      height: '600px',
      width: '900px'
    });
  }

  openDialog(templateRef) {
    let dialogRef = this.preview.open(templateRef, {
      width: '300px'
    });
  }




  cart(item: any) {
    this.api.addToCart(item);
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


  same: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {
    console.log(data)
    this.same = this.data;
  }
  ngOnInit(): void {
    //console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }



}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
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
export class ShopComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ShopComponent>,
    private api: SerivesService
  ) { }

  ngOnInit() {
    this.api.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    // For real-time updates:
    this.api.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }



}