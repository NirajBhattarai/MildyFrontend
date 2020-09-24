import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MindlyComponent } from './mindly/mindly.component';


const routes: Routes = [
  { path: '', redirectTo: '/mindly', pathMatch: 'full' },
  { path: 'mindly',  component: MindlyComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
