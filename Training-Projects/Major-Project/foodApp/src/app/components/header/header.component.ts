import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module'
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from 'src/app/utilities/session.service';
import { UserService } from 'src/app/utilities/user.service';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = '';
  currentUser: any;
  cartItems:number=0;

  constructor(public dialog: MatDialog, private _sessionService: SessionService, private _userService: UserService, private router: Router) {
    router.events
      .subscribe((e) => {

        if (e instanceof NavigationEnd) {

          this.currentRoute = e.url;
          if (this.currentUser != undefined && this.currentUser.role == 'ro') {
            this.router.navigate(['/ro-home']);
          }
        }
      });
    // activatedRoute.root.url.subscribe((data) => {
    //   console.log(data[0].path);

    //   this.currentRoute = data[0].path;
    // });

    this._userService.getUser().subscribe((data) => {

      this.currentUser = data;
      // console.log(this.currentUser);
      // console.log( this.router.url);
      if(this.currentUser?.cart!= undefined)
      {
        this.cartItems=this.currentUser.cart.foodList.length;
      }
      else{
        this.cartItems=0;
      }

      if (this._sessionService.checkSession() && this.currentUser?.role == 'ro') {
        this.router.navigateByUrl('/ro-home');
      }
      else if(this._sessionService.checkSession() && this.currentUser?.role == 'de' )
      {
        this.router.navigateByUrl('/de-dashboard');
      }
    });

  }

  ngOnInit(): void {

  }

  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

  logout() {
    this._sessionService.clearSession();
    this._userService.resetLocalData();
    this.router.navigate(['/']);
  }



}
