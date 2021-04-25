import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private navObject!:NavigationStart;

  currentUser!:IUser;

  constructor(private router:Router) {
    router.events.pipe(filter(event=>event instanceof NavigationStart)).subscribe((val)=>{
      console.log(val);
      this.navObject=<NavigationStart>val;
    });
  }

  isLoginPage():boolean{
    return this.navObject?.url=='/login';
  }

  loginUser(userName:string,password:string){
    console.log(userName+":"+password);

    this.currentUser={
      id:1,
      firstName:'Srinivas',
      lastName:'Channakeshava',
      imgUrl:'https://avatars.githubusercontent.com/u/7866498?v=4',
      userName:userName
    }
  }

  isAuthenticated(){
    return !!this.currentUser && !!this.currentUser.userName;
  }


}
