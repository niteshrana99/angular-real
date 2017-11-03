import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { NgZone } from '@angular/core'; 

declare const gapi: any;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent {
  private clientId: string = '886780716905-1pn1jv7d9p7bj9q1msura5ilvng4gh10.apps.googleusercontent.com';

  constructor(private element: ElementRef, private router: Router, private serverservice: ServerService, private ngZone: NgZone) {
    console.log('ElementRef: ', this.element);
  }

  public auth2: any;

  public googleInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin'
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let userProfile = {
          name: profile.getName(),
          image: profile.getImageUrl(),
          email: profile.getEmail()
        }
        this.serverservice.Userdetails(userProfile);
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.ngZone.run(() => {
            this.router.navigate(['books'])
        })
        // location.reload();
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
    // this.router.navigate(['books'])

  }


  ngAfterViewInit() {
    this.googleInit();
    // this.router.navigate(['books'])
  }
}
