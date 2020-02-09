import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcompoComponent } from './newcompo/newcompo.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: "", component: AccueilComponent, pathMatch: "prefix"},
  { path: "newcompo", component: NewcompoComponent},
  { path: "**", component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
