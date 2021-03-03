import { Component, OnInit } from '@angular/core';
 import { UserService } from '../../utility/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[]=[];
  constructor(private userserv: UserService) { }

  ngOnInit(): void {
    this.userserv.getUsers().subscribe((res: any)=>{
      const { data }=res;
      console.log(data);
      this.users=data;
    });
  }
  

}
