import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/ui/notes/notes.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotesPageComponent } from './components/pages/notes-page/notes-page.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    LoginComponent,
    NavbarComponent,
      NotesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, FormsModule],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
