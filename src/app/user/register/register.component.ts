import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | undefined;
  formErrors: any = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };

  validationMessages: any = {
    firstName: { required: 'El campo firstName es requerido',},
    lastName: {required: 'El campo lastName es requerido',},
    userName: {
      required: 'El campo usuario es requerido',
      email: 'El usuario es un formato de correo electronico',
      maxLength: 'La longitud maxima es de 100 caracteres'
    },
    password: {
      required: 'El campo contraseña es requerido',
      minLength: 'La longitud minima es de 6 caracteres'
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegister();
  }

  buildRegister(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any): void {
    if (!this.registerForm) { return; }
    const form = this.registerForm;

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
