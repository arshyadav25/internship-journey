import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerivesService {

  @Output() data = new EventEmitter();
  

  // sendData(arg0: string, data: any) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private _http: HttpClient) { }
  getlogindetils(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/7f99-7394-4e50-aa8e')
  }
  getDummyData(url){
    return this._http.get(url)
  }
  changeData(item:any){
    console.log('hit',item);
    this.data.emit(item)
  }
}


