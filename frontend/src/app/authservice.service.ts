import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public adminloggedin = false;
  private adminemail;
  public emploggedin = false;
  private empemail;

  public patientloggedin = false;
  private patientid;
  constructor(private router: Router) {
    this.adminemail = localStorage.getItem("adminemail");
    this.empemail = localStorage.getItem("empemail");
    this.patientid = localStorage.getItem("patientid");
    if(this.adminemail!=null){
      this.adminloggedin = true;
    }

    if(this.empemail!=null){
      this.emploggedin =true;
    }

    if(this.patientid!=null){
      this.patientloggedin =true;
    }
  }
}
