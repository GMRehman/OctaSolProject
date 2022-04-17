import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateVoucherComponent } from './create-voucher/create-voucher.component';
import { ArrivalReportComponent } from './arrival-report/arrival-report.component';
import { ManageTransportComponent } from './manage-transport/manage-transport.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePartiesComponent } from './manage-parties/manage-parties.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManageSectorComponent } from './manage-sector/manage-sector.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateVoucherComponent,
    ArrivalReportComponent,
    ManageTransportComponent,
    ManageUsersComponent,
    ManagePartiesComponent,
    ManageAirlinesComponent,
    ManageStaffComponent,
    ManageSectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
