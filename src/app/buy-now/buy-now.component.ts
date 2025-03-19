import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data ,public dialogRef: MatDialogRef<BuyNowComponent>) { }
  buyNowData: any;

  ngOnInit(): void {
   
   this.buyNowData = this.data; 
   console.log(this.buyNowData);
  }

}
