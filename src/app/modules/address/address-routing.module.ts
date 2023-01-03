import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from 'src/app/components/address/address.component';
import { ObservablesComponent } from 'src/app/components/observables/observables.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ObservablesComponent, children: [
      { path: '6', component: AddressComponent }
    ], canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
