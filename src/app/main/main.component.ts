import { Component, OnInit, Injector } from '@angular/core';
import {BaseComponent} from './../lib/base-component';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item:any;
  new:any;
  prom:any;
  constructor(injector: Injector) { 
    super(injector);
  }


ngOnInit(): void {
  this.getproAll();
  this.getpronew();
  this.getpropromo();
}
getproAll(){
  Observable.combineLatest(
    this._api.get('/api/product/get-pro-all'),
  ).takeUntil(this.unsubscribe).subscribe(res => {
    this.list_item = res[0];
    console.log(res);
    console.log("abc");
    setTimeout(() => {
      this.loadScripts();
    });
  }, err => { });
}
getpronew(){
  Observable.combineLatest(
    this._api.get('/api/product/get-pro-new'),
  ).takeUntil(this.unsubscribe).subscribe(res => {
    this.new = res[0];
    setTimeout(() => {
      this.loadScripts();
    });
  }, err => { });
}
getpropromo(){
  Observable.combineLatest(
    this._api.get('/api/product/get-pro-promo'),
  ).takeUntil(this.unsubscribe).subscribe(res => {
    this.prom = res[0];
    setTimeout(() => {
      this.loadScripts();
    });
  }, err => { });
}
}

