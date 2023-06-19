import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '_login', component: LoginComponent },
  { path: 'tracking', component: TrackingComponent }, 
  { path: '',
  component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
