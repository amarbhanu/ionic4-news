import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuPageModule } from './menu/menu.module';
import { TabsPageModule as TabsPageModule1 } from './tabs/tabs.module';
import { TabsPageModule as TabsPageModule2 } from './tabs2/tabs.module';
import { HomePageModule } from './home/home.module';
import { AboutPageModule } from './about/about.module';
import { ContactPageModule } from './contact/contact.module';


import {HttpClientModule} from '@angular/common/http';

  import { ProductProvider } from './providers/product/product';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    MenuPageModule,
    TabsPageModule1,
    TabsPageModule2,
    HomePageModule,
    AboutPageModule,
    ContactPageModule
  ],
  providers: [
     ProductProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
