import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  emplogin(){
    this.route.navigate(["emp_login"],{relativeTo:this.activeroute})
  }

  recrlogin(){
    this.route.navigate(["emp_login"],{relativeTo:this.activeroute})
  }

}
