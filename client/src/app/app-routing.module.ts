import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { NotesPageComponent } from './components/pages/notes-page/notes-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
   {path: 'home', component: NotesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
