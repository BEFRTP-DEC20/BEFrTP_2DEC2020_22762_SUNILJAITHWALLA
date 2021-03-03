import { dashCaseToCamelCase, stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/utilities/restaurant/restaurant.service';
import { SessionService } from 'src/app/utilities/session.service';
import { UserService } from 'src/app/utilities/user.service';
import { AddRatingDialogComponent } from '../add-rating-dialog/add-rating-dialog.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],

})
export class RestaurantHomeComponent implements OnInit, OnDestroy {

  restaurantData: any;
  foodData: any;
  restaurantId: string = "";
  // userId: any = "602a55efc358f7284c32af28";
  userData: any = "";
  userObs;
  pureVegChecked: boolean = false;

  constructor(private routes: ActivatedRoute, private _restaurantService: RestaurantService, private _userService: UserService, private _sessionService: SessionService, public dialog: MatDialog, private router: Router, private _snackbar: MatSnackBar) {
    routes.params.subscribe((param) => {
      this.restaurantId = param['id'];
    });
    // this.restaurantData=this._restaurantService.getRestaurantById(this.restaurantId);
    // this.userData = this._userService.getUser();
    this.userObs = this._userService.getUser().subscribe((user) => {
      // if(user==undefined){
      //   this._userService.updateUserDataLocal();
      // }
      // else{
      this.userData = user;
      if (this._sessionService.checkSession() && (this.userData?.role == 'de' || this.userData?.role == 'ro')) {
        // console.log('hello');

        // router.navigateByUrl('/');
      }
      // }
    });

    this._restaurantService.getRestaurantById(this.restaurantId).then((data) => {
      this.restaurantData = data;
      // console.log("in rest :", this.restaurantData);
    });
  }


  ngOnInit(): void {

    this._restaurantService.getFoodByRestaurant(this.restaurantId).subscribe(res => {
      if (res != undefined) {
        this.foodData = res;
        // console.log(this.foodData);
      }
    });

  }
  ngOnDestroy(): void {
    this.userObs.unsubscribe();
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  getPopularDishes(): string[] {
    let data: string[] = [];
    if (this.foodData != undefined) {
      this.foodData.forEach((element: any) => {
        data.push(element.food.foodName);
      });
    }
    data = data.filter((data, idx) => idx < 4);

    return data;
  }

  addRating() {
    if (this._sessionService.checkSession()) {
      const dialogRef = this.dialog.open(AddRatingDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result != undefined && result != null) {

          let ratingData = {
            restaurantRating: result,
            restaurantId: this.restaurantData._id
          }

          this._restaurantService.addRestaurantRating(ratingData).subscribe((data) => {

            this._restaurantService.getRestaurantById(this.restaurantId).then((rsdata) => {

              this.restaurantData = rsdata;
              // console.log("in rest :", this.restaurantData);
            });
          });
        }

      });

    }
    else {
      this.openDialogLogin();
    }

  }
  openDialogLogin() {
    let loginPopup = this._snackbar.open("Please login to Rate restaurant", 'Login Here.', {
      duration: 3000,
    });
    loginPopup.onAction().subscribe(() => {

      this.dialog.open(LoginComponent);
    })
  }


}
