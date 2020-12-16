import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from '../lib/base-component';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent extends BaseComponent implements OnInit {

  item:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/get-pro-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        console.log(res);
        setTimeout(() => {
          this.loadScripts();

        });
      }); 
    });

  }
}

