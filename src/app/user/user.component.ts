import { Component } from '@angular/core';
import {
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  display: boolean = false;
  user = {
    username: new FormControl (''),
    email: new FormControl (''),
    password: new FormControl (''),
    street: new FormControl (''),
    postalCode: new FormControl (''),
    city: new FormControl (''),
 };
  

  signUp() {
this.display = true;
  }
  
  
}
