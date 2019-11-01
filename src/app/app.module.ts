import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleChildComponentComponent } from './sample-child-component/sample-child-component.component';
import { ChildChildComponentComponent } from './sample-child-component/child-child-component/child-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleChildComponentComponent,
    ChildChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
