import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryExecutiveService } from 'src/app/utilities/delivery-executive/delivery-executive.service';
import { SessionService } from 'src/app/utilities/session.service';
import { UserService } from 'src/app/utilities/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit, OnDestroy {
  activeOrders: any = [];
  statusForm = this.formBuilder.group({
    selected: ['', Validators.required],
  });
  recentOrders: any = [];
  deCity: String = "";
  delivery:any;

  constructor(private _ordersServ: DeliveryExecutiveService,
    private _userService: UserService, private formBuilder: FormBuilder, private _sessionService: SessionService, private router: Router) { }
  ngOnDestroy(): void {
    clearInterval(this.delivery);
  }
  orders: any = [];
  ngOnInit(): void {
    this._userService.getUser().subscribe((data) => {

      if (!this._sessionService.checkSession() || data?.role != 'de') {
        this.router.navigate(['/']);
      }

      if (data != undefined && data.role == 'de') {
        this.deCity = data.deliveryExecutive.deliveryExecutiveLocation.city;

        this._ordersServ.activeOrders().subscribe(res => {
          this.Acount = res.orders.length;
          this.activeOrders = res.orders;

        });
        this._ordersServ.getOrders(this.deCity).subscribe(res => {
          this.Ocount = res.orders.length;
          this.orders = res.orders;
          // console.log(this.orders)
        });
        this._ordersServ.getRecent().subscribe(res => {
          this.recentOrders = res.orders;
        });
        this.delivery = setInterval(() => { this.gOrders(); }, 2000);
      }
    });

  }
  Acount = 0;
  Ocount = 0;
  gOrders(): void {
    this._ordersServ.getOrders(this.deCity).subscribe(res => {

        this.orders = res.orders


    });
    this._ordersServ.activeOrders().subscribe(res => {
      if (res.orders.length != this.Acount) {
        this.Acount = res.orders.length;
        this.activeOrders = res.orders;
      }
    });

  }

  acceptOrder(value: any, email: any): void {
    if (this.Acount < 3) {
      let val = Math.floor(1000 + Math.random() * 9000);
      this._ordersServ.acceptOrder(value, val, email).subscribe(res => {
      })

    } else {
      alert("Oops!! Cant accept more than 3 orders at a time")
    }
  }



  change(id: any, email: any, restaurantName: string, total: number, otp: number) {
    let status = '';
    status = this.statusForm.value.selected;
    let data = {
      restaurantName: restaurantName,
      billAmount: total
    }

    if (status === 'delivered') {
      let dOtp: any = prompt("Enter OTP");
      if (dOtp == otp) {
        this._ordersServ.orderStatus(id, "delivered").subscribe(res => {
        })
        this._ordersServ.sendMail(email, "delivered", data).subscribe(res => {
          // console.log(res);
        })
        alert("success");
      } else {
        alert('OTP is incorrect please try again');
      }
    } else if (status === 'pickedup') {
      this._ordersServ.sendMail(email, "Picked-up", data).subscribe(res => {
        // console.log(res);
      })
      this._ordersServ.orderStatus(id, "Picked-up").subscribe(res => {
        // console.log(res);
      })

    } else if (status === 'ontheway') {
      this._ordersServ.sendMail(email, "On-the-Way", data).subscribe(res => {
        // console.log(res);
      })
      this._ordersServ.orderStatus(id, "On-the-Way").subscribe(res => {
        // console.log(res);
      })
    }

  }
}
