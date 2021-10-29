import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent implements OnInit {
title= 'MSKT'
public identity: any;

  constructor(
    private _userservice: UserService
  ) { }

  ngOnInit(){
    this.identity = this._userservice.getIdentity();

  }

}
