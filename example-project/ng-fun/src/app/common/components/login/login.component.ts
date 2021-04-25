import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  mouseOverLogin!:boolean;
  constructor(private authServ:AuthService,private router:Router) {}

  ngOnInit(): void {}

  login(val: any) {
    this.authServ.loginUser(val.username,val.password);
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }
}
