import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';

import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '@app/store/movies';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@modules/core/core.module';

import { AppComponent, PageNotFoundComponent, MainPageComponent } from '@app/components';
import { environment } from '@env/environment';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25,  logOnly: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
