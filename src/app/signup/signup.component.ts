import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//validators
import { matchpassword } from './matchpassword.validatior';
//services
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ '../shared/shared.styles.css'],
})

export class SignupComponent implements OnInit, OnDestroy {
  
  signUpForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {}

  private initForm() {
    let name = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

      this.signUpForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        email: new FormControl(email, [Validators.email, Validators.required]),
        password: new FormControl(password, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('' , Validators.required)
      },
      {
        validators: matchpassword
      });
  }


  onSubmit=async()=> {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      this.signUpForm.updateValueAndValidity();
    }
    else {
      const { name, email, password } = this.signUpForm.value;

      this.isLoading = true;
      await this.authService.signup(name, email, password);
      this.isLoading = false;
    }
  }

  onBlurConfirmPassword() {
    this.signUpForm.updateValueAndValidity();
  }

  handleAuthType=()=> {
    this.router.navigateByUrl('/login'); 

  }

  navigate(path:string){
    this.router.navigate([path]);
  }
}
