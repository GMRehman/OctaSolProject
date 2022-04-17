import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrivalReportComponent } from './arrival-report/arrival-report.component';
import { CreateVoucherComponent } from './create-voucher/create-voucher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManagePartiesComponent } from './manage-parties/manage-parties.component';
import { ManageSectorComponent } from './manage-sector/manage-sector.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManageTransportComponent } from './manage-transport/manage-transport.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
{
  path:'dashboard',
  component:DashboardComponent
},
{path:'createVoucher',component:CreateVoucherComponent},
{path:'arrivalReport',  component:ArrivalReportComponent},
{path:'manageTransport',  component:ManageTransportComponent},
{path:'manageUsers',  component:ManageUsersComponent},
{path:'manageParties',  component:ManagePartiesComponent},
{path:'manageAirlines',  component:ManageAirlinesComponent},
{path:'manageStaff',  component:ManageStaffComponent},
{path:'manageSector',  component:ManageSectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
