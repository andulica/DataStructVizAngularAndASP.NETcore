import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphComponent } from '../Node/graph.component'; // Adjust path if needed

// main entry point for bootstraping angular apps
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglyLinkedListComponent } from './singly-linked-list/singly-linked-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglyLinkedListComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    GraphComponent // ✅ import standalone component here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
