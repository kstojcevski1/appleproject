import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  user1 : string = '';
  pass1 : string = '';
  incorectPassword : boolean = false;

  userName : string = 'Kristijan';
  userPass: string = 'Stojchevski';

  ngOnInit(): void {

  }


  constructor(private path : Router) {}

  userLogin() {
    if (this.user1 === this.userName && this.pass1 === this.userPass) {
      this.path.navigate(['home'])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong Password!'
      })
    }
  }
}


  // form: FormGroup = new FormGroup({
  //   username: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // });

  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.navigate(this.form.value);
  //   }
  // }


//   @Input() error: string | null | undefined;

//   @Output() submitEM = new EventEmitter();
// }



