import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBoxComponent } from './test-box/test-box.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBoxComponent,
    NavigationBarComponent,
    NavigationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
