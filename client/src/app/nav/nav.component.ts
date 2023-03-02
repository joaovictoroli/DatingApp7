import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.AccountService.login(this.model).subscribe({
      next: response => { 
        console.log(response);
        this.loggedIn = true;
       },
       error: error => console.log(error)
    })
    console.log(this.model);
  }

  logout() {
    this.loggedIn = false;
  }
}
