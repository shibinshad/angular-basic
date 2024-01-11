import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShibuComponent } from './shibu/shibu.component';
import { kunjaniPipe } from './kunjani.pipe';
import { SarasuDirective } from './shibu.directive';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ChildComponent } from './shibu/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ShibuComponent,
    kunjaniPipe,
    SarasuDirective,
    UsdInrPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
