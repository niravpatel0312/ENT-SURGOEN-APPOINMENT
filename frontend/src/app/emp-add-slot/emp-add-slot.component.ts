import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-add-slot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-add-slot.component.html',
  styleUrl: './emp-add-slot.component.css'
})
export class EmpAddSlotComponent {
  empid:any;
  constructor(private http:HttpClient,private router:Router){
      
      }
    
      onsubmit(form:NgForm){
        this.empid = localStorage.getItem("empid");
        const rdata = {
          slot: form.value.txtslot,
          empid: this.empid
        }
    
        this.http.post("http://localhost:3000/add_slot",rdata)
            .subscribe({
              next:(response:any)=>{
                
                  alert("Slot Detail Saved Succesfully");
                  this.router.navigate(["/emp_view_timeslot"]);
                
              },
              error:(err)=>{
                console.log("Error in Insertion of Slot: ",err);
              }
            })
    
      }
}
