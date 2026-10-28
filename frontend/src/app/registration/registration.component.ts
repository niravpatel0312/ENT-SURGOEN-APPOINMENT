import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private http:HttpClient,private router:Router){

  }

  onsubmit(form:NgForm){
    const rdata = {
      name: form.value.txtname,
      add: form.value.txtadd,
      city: form.value.txtcity,
      mno: form.value.txtmno,
      email: form.value.txtemail,
      pwd: form.value.txtpwd
    }

    this.http.post("http://localhost:3000/patient_regis",rdata)
        .subscribe({
          next:(response:any)=>{
            if(response.message=="Email Id Already Exists"){
              alert(response.message);
            }else if(response.patient_name){
              alert("Patient Register Succesfully");
              this.router.navigate(["/login"]);
            }else{
              alert("Check Your Data");
            }
          },
          error:(err)=>{
            console.log("Error in Patient Registration: ",err);
          }
        })

  }
}
