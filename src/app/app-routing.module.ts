import { LandingPageComponent } from './landing-page/landing-page.component';
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
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { AddFilesComponent } from './add-files/add-files.component';


const routes: Routes = [{
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
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
    path: 'upload',
    component: AddFilesComponent
  },
  {
    path: 'coursewise-material',
    component: CoursewiseMaterialComponent
  },
  {
    path : 'my-box',
    component : PersonalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}