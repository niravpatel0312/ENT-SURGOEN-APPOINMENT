import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-add-emp.component.html',
  styleUrl: './admin-add-emp.component.css'
})
export class AdminAddEmpComponent {
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
  
      this.http.post("http://localhost:3000/add_emp",rdata)
          .subscribe({
            next:(response:any)=>{
              if(response.message=="Email Id Already Exists"){
                alert(response.message);
              }else if(response.emp_name){
                alert("Receptionist Detail Saved Succesfully");
                this.router.navigate(["/admin_view_emp"]);
              }else{
                alert("Check Your Data");
              }
            },
            error:(err)=>{
              console.log("Error in Insertion of Employee: ",err);
            }
          })
  
    }
}
