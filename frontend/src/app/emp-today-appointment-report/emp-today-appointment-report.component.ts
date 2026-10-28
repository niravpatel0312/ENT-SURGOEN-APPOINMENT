import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-today-appointment-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-today-appointment-report.component.html',
  styleUrl: './emp-today-appointment-report.component.css'
})
export class EmpTodayAppointmentReportComponent {
slotdetail: any[] = [];
  appointdetail: any[] = [];
  patientdetail: any[] = [];

  constructor(private router: Router, private http: HttpClient) {

    this.fetchallslot();
    this.fetchappointdetail();
    this.fetchpatientdetail();
  }

  fetchallslot() {

    this.http.get("http://localhost:3000/patientfetchtimeslot")
      .subscribe({
        next: (response: any) => {
          this.slotdetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Emp Record: ", err);
        }

      })
  }


  fetchappointdetail() {

    this.http.get("http://localhost:3000/emp_fetch_todays_appointment")
      .subscribe({
        next: (response: any) => {
          this.appointdetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Emp Record: ", err);
        }

      })
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
