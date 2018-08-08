import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WindowReference } from './core/window';

import { SharedModule } from './shared/module';

import { LandingComponent } from './landing/landing';
import { NavComponent } from './nav/nav';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { AboutComponent } from './about/about';

@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
    WindowReference
  ],
  bootstrap: [LandingComponent]
})
export class AppModule { }
