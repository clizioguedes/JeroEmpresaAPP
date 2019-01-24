import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AfService } from 'src/app/serviços/af.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  email: string;

  constructor(
    private afService: AfService,
    private dialog: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
  }

  submit() {
    this.afService.resetPassword(this.email).then((res) => {
      alert('Foi enviado um email para recuperar sua senha para o Endereço:' + this.email);
    }).catch(
      (err) => (
        alert('Este Endereço' + this.email + ' é invalido'))
    );
    this.dialog.close();
  }
}
