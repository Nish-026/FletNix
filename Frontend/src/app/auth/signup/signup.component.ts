import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

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
    }).subscribe((data)=> {
      this.router.navigate(['/login']);
    })
  }

}
