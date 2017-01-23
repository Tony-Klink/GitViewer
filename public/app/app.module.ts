import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InputTextModule, DataScrollerModule } from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { Listholder } from './main_component/listholder.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, InputTextModule, DataScrollerModule ],
  declarations: [ AppComponent, Listholder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
