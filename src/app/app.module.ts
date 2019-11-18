import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleChildComponentComponent } from './sample-child-component/sample-child-component.component';
import { ChildChildComponentComponent } from './sample-child-component/child-child-component/child-child-component.component';
import { MakeClicksHappenComponent } from './make-clicks-happen/make-clicks-happen.component';
import { ShowClickCountComponent } from './show-click-count/show-click-count.component';
import { FooterComponent } from './footer/footer.component';
import { ShowVakueComponent } from './show-vakue/show-vakue.component';
import { IncreaseCountButtonComponent } from './increase-count-button/increase-count-button.component';
import { ApiCallExampleComponent } from './api-call-example/api-call-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleChildComponentComponent,
    ChildChildComponentComponent,
    MakeClicksHappenComponent,
    ShowClickCountComponent,
    FooterComponent,
    ShowVakueComponent,
    IncreaseCountButtonComponent,
    ApiCallExampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
