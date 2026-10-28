import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-update-emp.component.html',
  styleUrl: './admin-update-emp.component.css'
})
export class AdminUpdateEmpComponent {
  empdetail:any;
  eid:String;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){
    this.eid = this.route.snapshot.params["eid"];
  }
  ngOnInit(){
    this.fetchsingleemp();
  }

  fetchsingleemp(){
    this.http.get("http://localhost:3000/fetch_single_emp/"+this.eid)
      .subscribe({
        next: (response:any)=>{
          this.empdetail = response;
        },
        error: (err)=>{
          console.log("Error In Fetching Emp Record: ",err);
        }

      })
  }

  onsubmit(form:NgForm){
      const rdata = {
        name: form.value.txtname,
        add: form.value.txtadd,
        city: form.value.txtcity,
        mno: form.value.txtmno,
        email: form.value.txtemail,
        pwd: form.value.txtpwd,
        eid: form.value.txteid
      }
  
      this.http.post("http://localhost:3000/update_emp",rdata)
          .subscribe({
            next:(response:any)=>{
                    alert("Receptionist Detail Updated Succesfully");
                this.router.navigate(["/admin_view_emp"]);
              
            },
            error:(err)=>{
              console.log("Error in Updation of Employee: ",err);
            }
          })
  
    }
}
