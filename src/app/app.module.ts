import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {HomeModule} from './components/home/home.module';
import {FavoriteModule} from './components/favorite/favorite.module';
import {PopupModule} from './shared/components/popup/popup.module';
import {ROOT_REDUCERS} from './state/reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    PopupModule,
    FavoriteModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Search Store App',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
