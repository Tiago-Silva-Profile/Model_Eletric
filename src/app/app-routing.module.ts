import { ServicesAllComponent } from './services-all/services-all.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // { path: 'inicio', component: HomeComponent },
  // { path: 'sobre', component: AboutComponent },
  // { path: 'servicos', component: ServicesAllComponent },
  // { path: 'contatos', component: ContactsComponent },
  // { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
