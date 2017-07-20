/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UserprofileComponent} from "./userprofile/userprofile.component";
import {SignupComponent} from "./signup/signup.component";
import {UserwizardComponent} from "./userwizard/userwizard.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectprofileComponent} from "./projectprofile/projectprofile.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'user', component: UserprofileComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'createuser', component: UserwizardComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'myproject', component: ProjectprofileComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
