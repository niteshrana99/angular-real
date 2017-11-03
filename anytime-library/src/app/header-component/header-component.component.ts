import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent  {

  showAfterLandingPage = false;
  constructor(private serverservice: ServerService, private route:ActivatedRoute, location: Location) { 
    console.log(window.location);
    if(window.location.pathname !== '/') {
    this.showAfterLandingPage = true;
     
  }
  }

 

}
