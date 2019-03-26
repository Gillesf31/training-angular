import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { ChangePasswordValidators } from '../changepassword.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: ['', Validators.required, ChangePasswordValidators.isOldPassword],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, {
      validator: ChangePasswordValidators.isConfirmedPassword
    });
  }

  get oldpassword() {
    return this.form.get('oldpassword');
  }

  get newpassword() {
    return this.form.get('newpassword');
  }

  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
}
