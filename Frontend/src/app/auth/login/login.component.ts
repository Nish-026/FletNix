import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {

  }

  submitForm = () => {
    this.commonService.logIn({
      email: this.email,
      password: this.password
    }).subscribe((data)=> {
      localStorage.setItem('userData', JSON.stringify(data)).;
      this.router.navigate(['/homepage']);
    })
  }
}
