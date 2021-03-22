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

  constructor(private path : Router) {}

  form!: FormGroup;

  user1 : string = '';
  pass1 : string = '';
  incorectPassword : boolean = false;

  userName : string = 'Kristijan';
  userPass: string = 'Stojchevski';

  ngOnInit(): void {

  }

  userLogin() {
    if (this.user1 === this.userName && this.pass1 === this.userPass) {
      this.path.navigate(['home'])
      Swal.fire({
        title: 'Successfully Entered.',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `rgba(0,0,123,0.4) url("/images/nyan-cat.gif") left top no-repeat`
      })
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



