import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import {AngularFirestore} from '@angular/fire/compat/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
