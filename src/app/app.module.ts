import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatMenuModule, MatButtonModule, MatInputModule, } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { HeaderComponent } from './common/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountsComponent,
    TransfersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
