import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from './../../model/loginInterface';
import { FormGroup, Validators, FormBuilder, AbstractControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public emailIdMsg = false;
  public disablebtn = true;
  public passwordMsg = false;
  validEmailId: string = 'test@test.com'
  validPassword: string = "8256455";

  data: any;
  isSubmitted = false;
  constructor(private router: Router,
    private formBuilder: FormBuilder) {
    this.data = {
      email: '',
      password: '',
    };
  }

  ngOnInit() {
  }
  onSubmit(myForm: NgForm) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(myForm.form.value);
    if (myForm.form.value.email === 'test@test.com' && myForm.form.value.password === '8256455') {
      alert('You are Logged In Successfully.');
      this.router.navigate(['/scan-qr'])
    } else {
      alert('Please Enter Valid EmailId and Password.')
    }
  }

  noSubmit(e) {
    e.preventDefault();
  }


}
