import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggingOut = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.isLoggingOut = true;
    this.userService.userLogout().subscribe((res) => {
      this.isLoggingOut = false;
      this.router.navigate(['login']);
    });
  }
}
