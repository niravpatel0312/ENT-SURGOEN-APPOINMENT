import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-update-patient-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-update-patient-profile.component.html',
  styleUrl: './emp-update-patient-profile.component.css'
})
export class EmpUpdatePatientProfileComponent {
 profiledetail: any;
  patientdetail: any[] = [];
  eid: any;
  pid:any;
  constructor(private router: Router, private http: HttpClient,private route:ActivatedRoute) {
    this.pid = this.route.snapshot.params["pid"];
    this.fetchsinglepatientprofile();
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
  fetchsinglepatientprofile() {
    
    this.http.get("http://localhost:3000/fetch_single_patient_profile/"+this.pid)
      .subscribe({
        next: (response: any) => {
          this.profiledetail = response;
        },
        error: (err) => {
          console.log("Error In Fetching Patient Profile: ", err);
        }

      })
  }
    onsubmit(form:NgForm){
        const rdata = {
        pid: form.value.selpatient,
        history: form.value.txthistory,
        prid: form.value.txtpid
      }
      this.http.post("http://localhost:3000/update_patientprofile",rdata)
        .subscribe({
          next:(response:any)=>{
            
              alert("Patient Profile Updated Successfully");
              this.router.navigate(["/emp_view_patient_profile"]);
           
          },
          error: (err)=>{
            console.log("Error in Insertion Of Patient Profile: ",err);
          }
        })
    }
}
