import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperMattableComponent } from './wrapper-mattable/wrapper-mattable.component';

const routes: Routes = [
  {path:'',component:WrapperMattableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
