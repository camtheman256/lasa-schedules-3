import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from "@ionic/storage-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: APP_BASE_HREF, useValue: '/lasa-schedules-3' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
