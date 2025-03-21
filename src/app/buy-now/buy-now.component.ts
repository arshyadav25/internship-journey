import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data ,public dialogRef: MatDialogRef<BuyNowComponent>, private route :Router) { }
  buyNowData: any;
  total = 0;
  tax:any;
  selected = 'option2';



  ngOnInit(): void {
   
   this.buyNowData = this.data; 
   console.log(this.buyNowData);
  
   this.buyNowData.forEach((item: any) => {
     this.total += item.price ;
   })
   this.tax = this.total + 2;
  }

}
