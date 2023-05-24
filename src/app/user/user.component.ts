import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserModel } from '../usermodel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: UserModel;
  signupForm!: FormGroup;
  // userUsername = '';
  // userEmail = '';
  // userPassword = '';
  // userStreet = '';
  // userPostalCode = '';
  // userCity = '';

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(4)],
      street: ['', Validators.required],
      postalCode: ['', Validators.required, Validators.minLength(5)],
      city: ['', Validators.required],
    });
  }

  signUp() {
    this.user = this.signupForm.value;
  }
}
