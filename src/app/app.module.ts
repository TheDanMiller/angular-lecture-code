import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleChildComponentComponent } from './sample-child-component/sample-child-component.component';
import { ChildChildComponentComponent } from './sample-child-component/child-child-component/child-child-component.component';
import { MakeClicksHappenComponent } from './make-clicks-happen/make-clicks-happen.component';
import { ShowClickCountComponent } from './show-click-count/show-click-count.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleChildComponentComponent,
    ChildChildComponentComponent,
    MakeClicksHappenComponent,
    ShowClickCountComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
