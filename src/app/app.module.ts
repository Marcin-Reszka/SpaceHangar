import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A2sCommModule } from 'a2s-comm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SpaceModule } from './space/space.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BlackHoleComponent],
  imports: [
    BrowserModule,
    A2sCommModule,
    SpaceModule,
    AppRoutingModule,
    HttpClientXsrfModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
