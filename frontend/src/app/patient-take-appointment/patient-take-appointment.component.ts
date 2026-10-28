import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-take-appointment',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule],
  templateUrl: './patient-take-appointment.component.html',
  styleUrl: './patient-take-appointment.component.css',
  providers: [DatePipe]
})
export class PatientTakeAppointmentComponent {
 currentDate: Date = new Date();
   formattedDate: string | null;
slotdetail:any [] = [];
patientid:any;
   constructor(private router:Router,private http:HttpClient,private datePipe: DatePipe){
      this.formattedDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
      this.fetchalltimeslotdetail();
    }
fetchalltimeslotdetail(){
      
      this.http.get("http://localhost:3000/patientfetchtimeslot")
        .subscribe({
          next:(response:any)=>{
            this.slotdetail = response;
          },
          error:(err)=>{
            console.log("Error In Fetching Time Slot Detail: ",err);
          }
        })
    }
  
  onsubmit(form:NgForm){
    this.patientid = localStorage.getItem("patientid");
    const rdata = {
        adate: form.value.txtdate,
        sid: form.value.seltimeslot,
        patientid: this.patientid,
        mhistory: form.value.txthistory
      }
      this.http.post("http://localhost:3000/take_appointment",rdata)
        .subscribe({
          next:(response:any)=>{
            if(response.message=="Slot Already Booked"){
              alert("Slot Already Booked Please Select Another Slot");
            }else if(response.appoint_date){
              alert("Appointment Booked Successfully");
              this.router.navigate(["/patient_view_appointment"]);
            }else{
              alert("Check Your Data");
            }
          },
          error: (err)=>{
            console.log("Error in Take Appointment : ",err);
          }
        })
  }

    
}
