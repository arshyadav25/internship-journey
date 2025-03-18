import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerivesService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  @Output() data = new EventEmitter();
  
  constructor(private _http: HttpClient) { }

  addToCart(item: any) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);
  }

  
  getlogindetils(): Observable<any>{
    // return  this._http.get('https://dummyjson.com/c/7f99-7394-4e50-aa8e')
    return  this._http.get(' http://localhost:3000/categories')
    // return  this._http.get('https://dummyjson.com/c/411e-f5d6-43a7-9d16')
  }

  getDummyData(url){
    return this._http.get(url)
  }

  changeData(item:any){
    console.log('hit',item);
    this.data.emit(item)
  }

}


