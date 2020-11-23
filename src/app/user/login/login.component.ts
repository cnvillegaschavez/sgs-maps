import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from './../services';
import { ValidationMessage } from './../../shared/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, private userService: UserService) {

  }

  public userForm: FormGroup | undefined;
  public messages = '';
  loading = false;

  formErrors: any = {
    userName: '',
    password: ''
  };

  validationMessages: any = {
    userName: {
      required: '',
      email: 'El usuario es un formato de correo electronico',
      maxLength: 'La longitud maxima es de 100 caracteres'
    },
    password: {
      required: 'El campo contraseña es requerido',
      maxLength: 'La longitud maxima es de 20 caracteres'
    }
  };

  ngOnInit(): void {
    this.buildForm();
  }

  public onLogin(): void {
    if (this.userForm && !this.userForm.valid) {
      return;
    }
    const userInfo = {
      idusuario: 4,
      idpersona: 8,
      userName: 'fullName',
      codestado: 1,
      personaNombres: 'Usuario Responsable',
      userRole: {
         idRol: 1,
         codigo: '001',
         nombre: 'Responsable'
      },
      hasPermission: true
   };
    this.loading = true;
    setTimeout(() => {
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.router.navigate(['admin/maps']);
      this.loading = false;
    }, 2000);
  }

  buildForm(): void {

    this.userForm = this.fb.group({
      userName: [, [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: [, [Validators.required, Validators.maxLength(20)]],
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any): void {
    if (!this.userForm) { return; }
    const form = this.userForm;

    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }
}
