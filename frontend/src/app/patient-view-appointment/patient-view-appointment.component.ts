import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-view-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-view-appointment.component.html',
  styleUrl: './patient-view-appointment.component.css'
})
export class PatientViewAppointmentComponent {
slotdetail:any [] = [];
appointdetail:any [] = [];
pid:any;

  constructor(private router:Router,private http:HttpClient){
    
    this.fetchallslot();
    this.fetchappointdetail();
  }

  fetchallslot(){
    
    this.http.get("http://localhost:3000/patientfetchtimeslot")
      .subscribe({
        next: (response:any)=>{
          this.slotdetail = response;
        },
        error: (err)=>{
          console.log("Error In Fetching Emp Record: ",err);
        }

      })
  }


  fetchappointdetail(){
    this.pid = localStorage.getItem("patientid");
    this.http.get("http://localhost:3000/patient_fetch_appointment/"+this.pid)
      .subscribe({
        next: (response:any)=>{
          this.appointdetail = response;
        },
        error: (err)=>{
          console.log("Error In Fetching Emp Record: ",err);
        }

      })
  }

    
}
