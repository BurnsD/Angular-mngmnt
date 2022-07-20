import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee-table', component: EmployeeTableComponent },
  { path: 'home', component: LoginFormComponent},
  { path: '', component: HeaderComponent},
  { path: '', component: FooterComponent},


  { path: 'search/:searchTerm', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EmployeeComponent,
  EmployeeTableComponent,
  HeaderComponent,
  FooterComponent

];