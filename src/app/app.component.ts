import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sortir';
  isLoggedIn: boolean | undefined;
  showAdminBoard: any;
  username: any;

  constructor(private tokenStorageService: TokenStorageService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user_id = this.tokenStorageService.getUser();
      this.userService.getPublicContent(user_id).subscribe( // recupere les info d'un user avec son id
        data => {
          console.log(data)
        },
        err => {
          console.log(err)
        }
  
      );
    }else{
      this.router.navigate(['/']);
    }
  }

}
