import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { Address } from './types/address';
import { Album } from './types/album';
import { Company } from './types/company';
import { Geo } from './types/geo';
import { Photo } from './types/photo';
import { User } from './types/user';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
