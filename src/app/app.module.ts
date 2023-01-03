import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperDirective } from './shared/upper.directive';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsComponent } from './components/forms/forms.component';
import { ObservablesComponent } from './components/observables/observables.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AddressComponent } from './components/address/address.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    UpperDirective,
    ChildComponent,
    ParentComponent,
    FormsComponent,
    ObservablesComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
