import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-view-patient-profile',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './emp-view-patient-profile.component.html',
  styleUrl: './emp-view-patient-profile.component.css'
})
export class EmpViewPatientProfileComponent {
  profiledetail: any[] = [];
  patientdetail: any[] = [];
  eid: any;
  constructor(private router: Router, private http: HttpClient) {
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
    
    this.http.get("http://localhost:3000/fetch_patient_profile")
      .subscribe({
        next: (response: any) => {
          this.profiledetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Patient Profile: ", err);
        }

      })
  }

  ondelete(pid: Number) {
    if (confirm("Are You Sure You Want To Delete This Patient Profile?")) {
      this.http.delete("http://localhost:3000/delete_patient_profile/" + pid)
        .subscribe({
          next: (response: any) => {
            alert("Record Deleted Successfully");
            this.fetchpatientprofile();
          },
          error: (err) => {
            console.log("Error In Deletion of Patient Profile Detail: ", err);
          }
        })
    }
  }
}
