import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-patient-detail-report',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emp-patient-detail-report.component.html',
  styleUrl: './emp-patient-detail-report.component.css'
})
export class EmpPatientDetailReportComponent {

  patientdetail: any[] = [];

  constructor(private router: Router, private http: HttpClient) {
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
}
