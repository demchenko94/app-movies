import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, PageNotFoundComponent, MainPageComponent } from '@app/components';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
