import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonConstants } from 'src/app/shared/common/constants-common';
import { FirebaseService } from 'src/app/core/services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, private firebaseSErvice: FirebaseService) {

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
    this.loading = true;
    const userInfoValue = this.userForm?.value;

    navigator.geolocation.getCurrentPosition(x => {
      const userData = { userName: userInfoValue.userName, location: { latitude: x.coords.latitude, longitude: x.coords.longitude } };
      this.firebaseSErvice.addUser(userData);
    });

    setTimeout(() => {
      sessionStorage.setItem(CommonConstants.userInfo, JSON.stringify({ userName: userInfoValue.userName}));
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
