import { Component, OnInit } from '@angular/core';
import { ItemData } from './itemData'
import { ITEMS } from './item-database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gundogdayo';

  itemData = ITEMS;
  rifles: ItemData[] = [];
  shotguns: ItemData[] = [];
  smgs: ItemData[] = [];
  sidearms: ItemData[] = [];
  heavyweapons: ItemData[] = [];
  Lmgs: ItemData[] = [];
  others: ItemData[] = [];

  constructor() { }

  ngOnInit() {
    this.createItemList();
  }

  createItemList(){
    for( var i = 0; i < this.itemData.length; i++ ){
      var items = this.itemData[i];
      if(items.classify == 'ライフル'){
        this.rifles.push(items);
      }
      else if(items.classify == 'ショットガン'){
        this.shotguns.push(items);
      }
      else if(items.classify == 'SMG'){
        this.smgs.push(items);
      }
      else if(items.classify == 'ハンドガン'){
        this.sidearms.push(items);
      }
      else if(items.classify == '重火器'){
        this.heavyweapons.push(items);
      }
      else if(items.classify == 'Lmg'){
        this.Lmgs.push(items);
      }
      else{
        this.others.push(items);
      }
    }
  }
}
