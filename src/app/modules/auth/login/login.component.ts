import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  isLoading = false;
  isLogin = true;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    this.signupForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(formType: string): void {
    this.isLoading = true;
    // LOGIN FORM
    if (formType === 'login') {
      console.log(this.loginForm.value);
      this.userService.userLogin(this.loginForm.value).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/pets']);
        },
        (err) => {
          this.isLoading = false;
          alert('Error Logging in!');
        }
      );
      // REGISTER FORM
    } else {
      this.userService.createNewUser(this.signupForm.value).subscribe(
        () => {
          this.isLoading = false;
          this.snackBar
            .open('User Registered Successfully!', 'Login Now')
            .afterDismissed()
            .subscribe(() => {
              this.isLogin = true;
              this.router.navigate(['/login']);
            });
        },
        (err) => {
          this.isLoading = false;
          alert('Error creating the new account!');
        }
      );
    }
  }

  onFormSwitch() {
    this.isLogin = !this.isLogin;
    this.loginForm.reset();
    this.signupForm.reset();
  }
}
