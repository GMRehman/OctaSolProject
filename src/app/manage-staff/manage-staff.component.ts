import { Component, OnInit } from '@angular/core';
import { StaffService } from '../model/staff.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  constructor(public staffservice:StaffService) { }

  ngOnInit(): void {
      this.staffservice.getstaff().subscribe(data=>{
        this.staffservice.list_staff=data;
      });
  }

}
