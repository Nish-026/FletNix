import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    if(this.commonService.checkUserLogin()) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  logOut = () => {
    Swal.fire({
      icon: 'question',
      title: 'Confirm Logout',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout actions
        localStorage.removeItem('userData');
        setTimeout(()=>{
          this.router.navigate(['/login']);
        },2000)
        Swal.fire({
          icon: 'success',
          title: 'Logged Out',
          text: 'You have been successfully logged out.',
        });
      }
    });
  }
}