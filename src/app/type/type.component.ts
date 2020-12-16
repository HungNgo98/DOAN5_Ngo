import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent extends BaseComponent implements OnInit {

  list:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.list = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/get-menuu-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res;
        
        setTimeout(() => {
          this.loadScripts();

        });
      }); 
    });

  }
}
