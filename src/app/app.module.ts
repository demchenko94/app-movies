import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PageNotFoundComponent, MainPageComponent } from '@app/components';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
