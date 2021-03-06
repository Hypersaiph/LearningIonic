import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { GithubServiceProvider } from '../providers/github-service/github-service';
import { HttpModule } from "@angular/http";
import { FIREBASE_CREDENTIALS } from "./firebase.credentials";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { AddShoppingPage } from "../pages/add-shopping/add-shopping";

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    //Initiate AngularFire with
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //Import the AngularFireDatabaseModule to use database
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubServiceProvider
  ]
})
export class AppModule {}
