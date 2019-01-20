import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
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
    console.log(formValue.email);
    console.log(formValue.password);
    // console.log(formValue.email.value);
    // console.log(formValue.password.value);
    // console.log(formValue.value.email.value);
    // console.log(formValue.value.password.value);
    this.afService.signInRegular(formValue.email, formValue.password);
  }
}
