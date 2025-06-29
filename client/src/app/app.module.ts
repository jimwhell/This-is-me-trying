import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/ui/notes/notes.component';
import { CommonModule } from '@angular/common';
import { NotePageComponent } from './components/page/note-page/note-page.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotePageComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
