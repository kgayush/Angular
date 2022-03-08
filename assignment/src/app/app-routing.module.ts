import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';

const routes: Routes = [
  { path: 'fetch-api', component: FetchApiComponent},
  { path: 'employee', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FetchApiComponent, EmployeeDetailsComponent]
