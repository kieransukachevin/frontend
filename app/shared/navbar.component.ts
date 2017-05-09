import {Component, NgModule} from '@angular/core';
import { RouterLink } from '@angular/router';

import { RequestService } from "../RequestService/requests";
import { MEDIA_SM, DEFAULT_PHOTO, CURRENT_YEAR } from '../config';


@Component({
  selector: 'navbar',
  templateUrl: 'app/shared/navbar.component.html',
  styleUrls: ['app/shared/navbar.styles.css'],
  providers: [ RequestService ]
})

export class NavbarComponent {
  currentUser: any;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor( private rs: RequestService ) {
    rs.verify((user) => {
      if(user) {
        this.isLoggedIn = true;
        this.currentUser = user;
        if(this.currentUser.roles.includes("forms")) {
          this.isAdmin = true;
        }
      }
    });
  }

  getPhotoLink(url: string){
    if(url && url != "None"){
      return MEDIA_SM + "/" + url;
    } else {
      return MEDIA_SM + "/" + DEFAULT_PHOTO;
    }
  }

  displayUserOptions(){
  }
}
