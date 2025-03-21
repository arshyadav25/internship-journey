import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SerivesService {
  updateCartCount(length: number) {
    throw new Error('Method not implemented.');
  }
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  @Output() data = new EventEmitter();
  
  constructor(private _http: HttpClient,private snackBar: MatSnackBar ) { }

  addToCart(item: any) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);
  }

  
  getlogindetils(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/7f99-7394-4e50-aa8e')
    // return  this._http.get(' http://localhost:3000/categories')
  }

  getDummyData(url){
    return this._http.get(url)
  }

  changeData(item:any){
    console.log('hit',item);
    this.data.emit(item)
  }
  openSnackBar(msg: string, type: string){
    this.snackBar.open(msg,'Close',{
      duration:2000,  
      horizontalPosition: type == 'success' ?  'end' : 'start',
      verticalPosition: 'top',
      panelClass: [type == 'success' ?  'success-class' : 'error-class']
    });
  }

}
