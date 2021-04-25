import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../../models/user'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routeUrl:any;
  constructor(public authServ:AuthService) {

   }

  ngOnInit(): void {
  }

  logout(){
    this.authServ.currentUser={} as IUser;

  }
}
