import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const matchpassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if(confirmPassword.touched && confirmPassword.value == '') {
    return { 'required': true };
  }

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
  
}