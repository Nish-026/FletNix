import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';
  age: number = 0;
  userName: string = '';

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {

  }

  submitForm = () => {
    this.commonService.signUp({
      email: this.email,
      password: this.password,
      age: this.age,
      username: this.userName
    }).subscribe((data:any)=> {
      console.log(data);
      if (data.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'SignUp Successful',
          text: 'You have successfully Registered.',
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }
      
    },(error: any) => {
      console.log('An error occurred:', error);
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed',
        text: `${error.error.message}`,
      });
    }
    )
  }

}
