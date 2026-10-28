import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-add-patient-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-add-patient-profile.component.html',
  styleUrl: './emp-add-patient-profile.component.css'
})
export class EmpAddPatientProfileComponent {
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
  onsubmit(form: NgForm) {
     const rdata = {
        pid: form.value.selpatient,
        history: form.value.txthistory
      }
      this.http.post("http://localhost:3000/add_patientprofile",rdata)
        .subscribe({
          next:(response:any)=>{
            if(response.patient_id){
              alert("Patient Profile Saved Successfully");
              this.router.navigate(["/emp_view_patient_profile"]);
            }
          },
          error: (err)=>{
            console.log("Error in Insertion Of Patient Profile: ",err);
          }
        })
    
  }
}
