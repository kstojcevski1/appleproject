import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleIpadsComponent } from './apple-ipads/apple-ipads.component';
import { AppleLaptopsComponent } from './apple-laptops/apple-laptops.component';
import { ApplePhonesComponent } from './apple-phones/apple-phones.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path: '', redirectTo : 'login', pathMatch : 'full'},
   {path: 'login', component : LoginComponent},
   {path: 'home', component : HomeComponent},
   {path: 'apple-phones', component : ApplePhonesComponent},
   {path: 'apple-laptops', component : AppleLaptopsComponent},
   {path: 'app-clients', component : ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
