import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//services
import { AuthService } from "../../core/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/shared.styles.css'],
})

export class LoginComponent implements OnInit {

  logInForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let email = '';
    let password = '';

    this.logInForm = new FormGroup({
      email: new FormControl(email, [Validators.email, Validators.required]),
      password: new FormControl(password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    }
    );
  }



  onSubmit = async () => {
    if (!this.logInForm.valid) {
      this.logInForm.markAllAsTouched();
      this.logInForm.updateValueAndValidity();
    }
    else {
      const { email, password } = this.logInForm.value;

      this.isLoading = true;
      await this.authService.login(email, password);
      this.isLoading = false;

    }
  }

  onBlurConfirmPassword() {
    this.logInForm.updateValueAndValidity();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
