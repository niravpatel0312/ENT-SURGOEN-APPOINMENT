import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-view-new-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-view-new-appointment.component.html',
  styleUrl: './emp-view-new-appointment.component.css'
})
export class EmpViewNewAppointmentComponent {
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

    this.http.get("http://localhost:3000/emp_fetch_new_appointment")
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

  onapprove(aid: Number) {

    this.http.get("http://localhost:3000/approve_appoint/" + aid)
      .subscribe({
        next: (response: any) => {
          alert("Appointment Approved Successfully");
          this.fetchappointdetail();
        },
        error: (err) => {
          console.log("Error In Approvoing Appointment: ", err);
        }
      })
  }


  onnotapprove(aid: Number) {

    this.http.get("http://localhost:3000/notapprove_appoint/" + aid)
      .subscribe({
        next: (response: any) => {
          alert("Appointment Not Approved Successfully");
          this.fetchappointdetail();
        },
        error: (err) => {
          console.log("Error In Not Approvoing Appointment: ", err);
        }
      })
  }
}
