import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private myHttp:HttpClient) { 
  }
  staffUrl:string = 'http://localhost:1234/api/staff';
  list_staff:Staff[]=[];
  staffObj: Staff = new Staff();

  getstaff() : Observable<Staff[]>{
return this.myHttp.get<Staff[]>(this.staffUrl);
  }
}
