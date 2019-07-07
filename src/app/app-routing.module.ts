import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  LoginSinglePageComponent
} from './login-single-page/login-single-page.component';
import {
  AboutComponent
} from './about/about.component';
import {
  RegisterComponent
} from './register/register.component';
import {
  UploadfileComponent
} from "./uploadfile/uploadfile.component";
import {
  CoursewiseMaterialComponent
} from "./coursewise-material/coursewise-material.component";


const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile/:uid',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginSinglePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'upload:uid',
    component: UploadfileComponent
  },
  {
    path: 'coursewise-material',
    component: CoursewiseMaterialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}