import { Component, OnInit } from '@angular/core';
import { UsersListModel } from 'src/app/shared/models/users-list.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  usersList: UsersListModel<UserModel>;

  constructor(private userManagServ: UserManagementService) { }

  ngOnInit() {
    this.userManagServ.getUsers(1).subscribe(response => {
      console.log(response);
    });
  }

}
