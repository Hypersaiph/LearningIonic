import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddShoppingPage} from "../add-shopping/add-shopping";
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FirebaseListObservable} from "@angular/fire/database-deprecated";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  //shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;
  shoppingItemRef$: AngularFireList<{}>;//FirebaseListObservable<ShoppingItem[]>;

  constructor(private navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    // Pointing shoppingListRefs ar Firebase -> shopping-list
    this.shoppingItemRef$ = this.database.list('shopping-list');
    this.shoppingItemRef$.subscribe(x => console.log(x));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }
  navigateToAddShoppingPage(): void {
    this.navCtrl.push(AddShoppingPage);
  }
}
