import { Component, OnInit } from '@angular/core';
import { AfService } from '../serviços/af.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  autenticado = false;
  hide = true;
  constructor(private router: Router, private afService: AfService) { }

  ngOnInit() {

  }
  signInWithEmail() {
      this.afService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
         console.log(res);
         this.router.navigate(['dashboard']);
         this.autenticado = true;
      })
      .catch(
        (err) => (
        console.log('error: ' + err), alert("E-mail e/ou senha incorretos"))
      );
    }
} 
