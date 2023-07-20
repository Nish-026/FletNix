import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsPageComponent } from './dashboard/details-page/details-page.component';

@NgModule({       //All Components,modules,services used in application are declared here, appmodule
  declarations: [
    AppComponent,
    SignupComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
