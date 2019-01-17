import { Component, OnInit } from '@angular/core';
import { AfService } from 'src/app/serviços/af.service';

@Component({
  selector: 'app-navbar-funcionario',
  templateUrl: './navbar-funcionario.component.html',
  styleUrls: ['./navbar-funcionario.component.css']
})
export class NavbarFuncionarioComponent implements OnInit {

  constructor(private afService: AfService) { }

  ngOnInit() {
  }

  logout() {
    this.afService.logout();
  }
}
