import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './package/package.component';
import { LogoutComponent } from './logout/logout.component';
import { PackageWeekComponent } from './package-week/package-week.component';
import { Profile } from 'selenium-webdriver/firefox';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'',component: HomeComponent },
    { path:'login',component:LoginComponent   },
    { path:'register',component: RegisterComponent  },
    { path:'Package',component: PackageComponent  },
    { path: 'logout', component: LogoutComponent },
    {path:'package-week',component:PackageWeekComponent},
    { path: 'setup-profile', component:SetupProfileComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
