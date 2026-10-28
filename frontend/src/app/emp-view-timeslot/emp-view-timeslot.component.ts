import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-view-timeslot',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emp-view-timeslot.component.html',
  styleUrl: './emp-view-timeslot.component.css'
})
export class EmpViewTimeslotComponent {
slotdetail:any [] = [];
eid:any;
  constructor(private router:Router,private http:HttpClient){
    this.fetchslotdetail();
  }

  fetchslotdetail(){
    this.eid = localStorage.getItem("empid");
    this.http.get("http://localhost:3000/fetch_slot_detail/"+this.eid)
      .subscribe({
        next: (response:any)=>{
          this.slotdetail = response;
        },
        error: (err)=>{
          console.log("Error In Fetching Emp Record: ",err);
        }

      })
  }

  ondelete(sid:Number){
    if(confirm("Are You Sure You Want To Delete This Slot?")){
      this.http.delete("http://localhost:3000/delete_slot/"+sid)
          .subscribe({
            next:(response:any)=>{
              alert("Record Deleted Successfully");
              this.fetchslotdetail();
            },
            error: (err)=>{
              console.log("Error In Deletion of Slot Detail: ",err);
            }
          })
        }
  }
}
