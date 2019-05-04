import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlighterComponent } from './components/highlighter/highlighter.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
