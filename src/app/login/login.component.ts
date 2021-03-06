import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AfService } from '../serviços/af.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../componentes/dialog/dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  autenticado = false;
  fileNameDialogRef: MatDialogRef<DialogComponent>;

  constructor(
    private router: Router,
    private afService: AfService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponent, {
    });
  }

  signInWithEmail() {
    const formValue = this.form.value;
    // console.log(formValue.email);
    // console.log(formValue.password);
    this.afService.signInRegular(formValue.email, formValue.password);
  }
}
