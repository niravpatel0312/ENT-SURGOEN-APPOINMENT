import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-view-emp',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-view-emp.component.html',
  styleUrl: './admin-view-emp.component.css'
})
export class AdminViewEmpComponent {
  empdetail:any [] = [];
  constructor(private router:Router,private http:HttpClient){
    this.fetchempdetail();
  }

  fetchempdetail(){
    this.http.get("http://localhost:3000/fetch_emp")
      .subscribe({
        next: (response:any)=>{
          this.empdetail = response;
        },
        error: (err)=>{
          console.log("Error In Fetching Emp Record: ",err);
        }

      })
  }

  ondelete(eid:Number){
    if(confirm("Are You Sure You Want To Delete This Employee?")){
      this.http.delete("http://localhost:3000/delete_emp/"+eid)
          .subscribe({
            next:(response:any)=>{
              alert("Record Deleted Successfully");
              this.fetchempdetail();
            },
            error: (err)=>{
              console.log("Error In Employee Deletion: ",err);
            }
          })
        }
  }




}
