import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-view-patientwise-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-view-patientwise-profile.component.html',
  styleUrl: './emp-view-patientwise-profile.component.css'
})
export class EmpViewPatientwiseProfileComponent {
profiledetail: any[] = [];
  patientdetail: any[] = [];
  eid: any;
  prid:any;
  constructor(private router: Router, private http: HttpClient,private route:ActivatedRoute) {
    this.prid = this.route.snapshot.params["prid"];
    this.fetchpatientprofile();
     this.fetchpatientdetail();
  }

  fetchpatientdetail() {

    this.http.get("http://localhost:3000/fetch_all_patient_detail")
      .subscribe({
        next: (response: any) => {
          this.patientdetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Patient Record: ", err);
        }

      })
  }
  fetchpatientprofile() {
    
    this.http.get("http://localhost:3000/fetch_patientwise_profile/"+this.prid)
      .subscribe({
        next: (response: any) => {
          this.profiledetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Patient Profile: ", err);
        }

      })
  }
}
