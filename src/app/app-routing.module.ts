import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddressComponent } from './components/address/address.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ParentComponent } from './components/parent/parent.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path : '1', component:HomeComponent},
  {path : '3', component:ParentComponent},
  {path : '4', component:FormsComponent},
  // {path : '6', component:AddressComponent},
  {path:'5', loadChildren : () => import('./modules/address/address.module').then((m) => m.AddressModule)},
  {path : '2', component:AboutusComponent},
  {path : '', redirectTo:'1', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
