import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewdoctorComponent } from './viewdoctor/viewdoctor.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [{
  path: "createpatient",
  component: CreatepatientComponent,
  pathMatch: "full"
}, {
  path: "",
  component: HomeComponent,
  pathMatch: "full"
  },
  {
    path: "createdoctor",
    component: CreatedoctorComponent,
    pathMatch: "full"
  },
  {
    path: "showdoctor",
    component: ViewdoctorComponent,
    pathMatch: "full"
  },
  {
    path: "showpatient",
    component: ViewpatientComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagenotfoundComponent,
    pathMatch: "full"
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
