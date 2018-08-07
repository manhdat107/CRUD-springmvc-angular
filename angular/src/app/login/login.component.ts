import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_service/order.service';
import { user } from '../../_model/user';
import { UserService } from '../_service/user.service';
import { Router } from '../../../node_modules/@angular/router';
import { Result } from '../../_model/Result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  results: any = {};
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = new user();
  }
  checkLogin(user) {
    this.userService.checkLogin(user).subscribe(
      data => this.user,
      err => console.error(err),
      () => console.log(user)
    )
  }
 
  createuser(user) {
    this.userService.createUser(user).subscribe(
      result => {
        this.results.message = result;
        console.log(result)
        if(this.results.message===""){
        }
      },
    )
  }
}
