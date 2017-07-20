import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { ProjectprofileComponent } from './projectprofile/projectprofile.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserwizardComponent } from './userwizard/userwizard.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectprofileComponent,
        ProjectsComponent,
        UserprofileComponent,
        LoginComponent,
        SignupComponent,
        UserwizardComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
