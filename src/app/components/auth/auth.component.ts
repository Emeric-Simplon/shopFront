import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as user from '../../data/user.json';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = { email: '', password: '' };
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    if(user.email === this.user.email && user.password === this.user.password){
      localStorage.setItem("isLogged", "true")
      this.router.navigate(['/order-details']);
    }else{
      this.router.navigate(['/']);
    }
  }

}
