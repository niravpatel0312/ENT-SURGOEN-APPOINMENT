import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-update-slot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-update-slot.component.html',
  styleUrl: './emp-update-slot.component.css'
})
export class EmpUpdateSlotComponent {
  slotdetail:any;
  sid:any;
  empid:any;
  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){
    this.sid = this.route.snapshot.params["sid"];
    }
    ngOnInit(){
      this.fetchsingleslotdetail();
    }

  
    fetchsingleslotdetail(){
     
      this.http.get("http://localhost:3000/fetch_single_slot_detail/"+this.sid)
        .subscribe({
          next: (response:any)=>{
            this.slotdetail = response;
          },
          error: (err)=>{
            console.log("Error In Fetching Emp Record: ",err);
          }
  
        })
    }

      onsubmit(form:NgForm){
            this.empid = localStorage.getItem("empid");
            const rdata = {
              slot: form.value.txtslot,
              empid: this.empid,
              sid:form.value.txtsid
            }
        
            this.http.post("http://localhost:3000/update_slot",rdata)
                .subscribe({
                  next:(response:any)=>{
                    
                      alert("Slot Detail Updated Succesfully");
                      this.router.navigate(["/emp_view_timeslot"]);
                    
                  },
                  error:(err)=>{
                    console.log("Error in Insertion of Slot: ",err);
                  }
                })
        
          }
}
