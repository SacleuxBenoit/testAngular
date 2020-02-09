import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcompoComponent } from './newcompo/newcompo.component';


const routes: Routes = [{ path: "newcompo", component: NewcompoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
