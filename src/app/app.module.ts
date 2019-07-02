import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { CustomMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatOptionModule, MatTable, MatTableModule, MatInputModule, MatCell, MatTableDataSource } from '@angular/material';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCourseListComponent } from './user-course-list/user-course-list.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ShowFilesComponent } from './show-files/show-files.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableFilterModule } from 'mat-table-filter';
import { LoginSinglePageComponent } from './login-single-page/login-single-page.component';

import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavBarComponent,
    UserDetailsComponent,
    UserCourseListComponent,
    LoginpageComponent,
    RegisterComponent,
    ShowFilesComponent,
    LoginSinglePageComponent,
    UploadfileComponent,
    DashboardComponent,
    LoginSinglePageComponent,
    AlertBoxComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableFilterModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

