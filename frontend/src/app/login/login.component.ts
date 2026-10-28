import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private http:HttpClient,private router:Router,private authservice:AuthserviceService){

  }

  onsubmit(form:NgForm){
    const rdata = {
      email: form.value.txtemail,
      pwd: form.value.txtpwd
    }

    this.http.post("http://localhost:3000/login_user",rdata)
        .subscribe({
          next:(response:any)=>{
            if(response.message=="Admin Login Successfull"){
              localStorage.setItem("adminemail","admin");
              this.authservice.adminloggedin= true;
              alert(response.message);
              this.router.navigate(["/admin_view_emp"]);
            }else if(response.patient_name){
              localStorage.setItem("patientid",response.patient_id);
              this.authservice.patientloggedin = true;
              alert("Patient Login Succesfully");
              this.router.navigate(["/patient_take_appointment"]);
            }else if(response.emp_name){
              localStorage.setItem("empid",response.emp_id);
              localStorage.setItem("empemail",response.email_id);
              this.authservice.emploggedin= true;
              alert("Receptionist Login Successfully");
              this.router.navigate(["/emp_view_timeslot"]);
            }else{
              alert("Check Your Email Id or Password");
            }
          },
          error:(err)=>{
            console.log("Error in Patient Registration: ",err);
          }
        })

  }
}
