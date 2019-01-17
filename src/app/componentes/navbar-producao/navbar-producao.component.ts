import { Component, OnInit } from '@angular/core';
import { AfService } from 'src/app/serviços/af.service';

@Component({
  selector: 'app-navbar-producao',
  templateUrl: './navbar-producao.component.html',
  styleUrls: ['./navbar-producao.component.css']
})
export class NavbarProducaoComponent implements OnInit {

  constructor(private afService: AfService) { }

  ngOnInit() {
  }

  logout() {
    this.afService.logout();
  }

}
