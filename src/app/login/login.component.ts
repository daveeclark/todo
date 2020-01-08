import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = 'username'
password = ''
errorMessage = 'Invalid Credentials'
invalidLogin = false

//Router
//Angular.giveMeRouter (old)
//Dependency Injection (new)
  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardCodedAuthenticationService) { 

  }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // if(this.username==="username" && this.password==='yeoo'){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
