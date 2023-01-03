import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  ngDoCheck() {
     if(!this.loginForm.valid){
      console.log("Not a  valid form")
     }
  }

  get user() {
    return this.loginForm.controls.username.value
  }

  get pass() {
    return this.loginForm.controls.password.value
  }

  onSubmit() {
    console.log(this.loginForm.controls)
  }
}
