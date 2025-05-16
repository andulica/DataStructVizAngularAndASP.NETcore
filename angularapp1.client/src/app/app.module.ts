import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// main entry point for bootstraping angular apps
import { AppRoutingModule } from './app-routing.module';
import { SinglyLinkedListComponent } from './componenets/singly-linked-list/singly-linked-list.component';

@NgModule({
  declarations: [
    SinglyLinkedListComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [SinglyLinkedListComponent]
})
export class AppModule { }
