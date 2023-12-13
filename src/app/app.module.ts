import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/user/register/register.component';
import { LoginComponent } from './component/user/login/login.component';
import { HomeComponent } from './component/user/home/home.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Material.Module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './Store/User/User.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './Store/User/User.Effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './Store/Common/App.Effect';
import { AdminEffect } from './Store/Admin/Admin.Effects';
import { UploadFileEffects } from './upload-file-store/effects';
import { UserListComponent } from './component/admin/user-list/user-list.component';
import { UploadFileStoreModule } from './upload-file-store/upload-file-store.module';
import { UploadFileComponent } from './component/user/upload-file/upload-file.component';

// import { AdminReducer } from './Store/Admin/Admin.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    UserListComponent,
    UploadFileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({user : UserReducer}), //, admin : AdminReducer
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      trace: true,
      traceLimit: 25
    }),
    EffectsModule.forRoot([AppEffects,UserEffect,AdminEffect]), 
    HttpClientModule,
    UploadFileStoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
