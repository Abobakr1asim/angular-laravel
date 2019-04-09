import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './package/package.component';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { PackageWeekComponent } from './package-week/package-week.component';
import { ProfileComponent } from './profile/profile.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    PackageComponent,
    LogoutComponent,
    PackageWeekComponent,
    ProfileComponent,
    SetupProfileComponent,
    FooterComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
