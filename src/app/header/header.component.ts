import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  list_menu:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.list_menu = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/menu/get-menu-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.list_menu = res;
        console.log(res);
        setTimeout(() => {
          this.loadScripts();

        });
      }); 
    });
      }
  }


