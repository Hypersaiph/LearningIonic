import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
//import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
//import { FirebaseListObservable} from "@angular/fire/database-deprecated";


@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  shoppingItem = {} as ShoppingItem;
  //shoppingItemRef$: AngularFireList<{}>;//FirebaseListObservable<ShoppingItem[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams/*, private database: AngularFireDatabase*/) {
    //this.shoppingItemRef$ = this.database.list('shopping-list');
    /*
    * shipping-list
    *   0:
    *     itemName: 'pizza',
    *     itemNumber: 1
    *   1:
    *     itemName: 'cheesecake',
    *     itemNumber: 2
    * */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }
  addShoppingItem(shoppingItem: ShoppingItem) {
    console.log(shoppingItem);
    /*this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    })*/
    //resetting the shoppingItem
    this.shoppingItem = {} as ShoppingItem;
    //navigate the user back to the ShioppingListPage
    this.navCtrl.pop();
  }
}
