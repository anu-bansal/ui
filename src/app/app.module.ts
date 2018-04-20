import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './shared/search-result/search-result.component';
import { SearchResultListComponent } from './shared/search-result/search-result-list/search-result-list.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerHeaderComponent } from './customer/component/customer-header/customer-header.component';
import {CustomerHeaderService} from './customer/service/customer-header.service';
import { FarmerHeaderComponent } from './farmer/component/farmer-header/farmer-header.component';
import {FarmerHeaderService} from './farmer/service/farmer-header.service';
import { FarmerMyAccountComponent } from './farmer/component/farmer-my-account/farmer-my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SearchResultComponent,
    SearchResultListComponent,
    HelpComponent,
    SupportComponent,
    AboutUsComponent,
    PoliciesComponent,
    ConnectUsComponent,
    CustomerHeaderComponent,
    FarmerHeaderComponent,
    FarmerMyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
