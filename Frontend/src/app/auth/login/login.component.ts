import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {

  }

  // submitForm = () => {
  //   this.commonService.logIn({
  //     email: this.email,
  //     password: this.password
  //   }).subscribe((data:any)=> {
  //     console.log(data)
  //     if(data.status==200){
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Login Successful',
  //         text: 'You have successfully logged in.',
  //       });
  //       localStorage.setItem('userData', JSON.stringify(data));
  //       setTimeout(()=>{
  //         this.router.navigate(['/homepage']);
  //       },3000)
        
  //     }else{
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Login Failed',
  //         text: 'Invalid username or password.',
  //       });
  //     }

  //   })
  // }

  submitForm = () => {
    this.commonService.logIn({
      email: this.email,
      password: this.password
    }).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have successfully logged in.',
          });
          localStorage.setItem('userData', JSON.stringify(data));
          setTimeout(() => {
            this.router.navigate(['/homepage']);
          }, 3000);
        }
      },
      (error: any) => {
        console.log('An error occurred:', error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password.',
        });
      }
    );
  }
  
}
