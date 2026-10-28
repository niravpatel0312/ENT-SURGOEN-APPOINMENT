import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authservice:AuthserviceService,private router:Router){

  }

  onlogout(){
    localStorage.removeItem("adminemail");
    this.authservice.adminloggedin = false;
    this.router.navigate(["/"]);
  }

   onlogout2(){
    localStorage.removeItem("empid");
    localStorage.removeItem("empemail");
    this.authservice.emploggedin = false;
    this.router.navigate(["/"]);
  }


  onlogout3(){
    localStorage.removeItem("patientid");
    
    this.authservice.patientloggedin = false;
    this.router.navigate(["/"]);
  }
}
