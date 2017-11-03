import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  apps: any = [];
  constructor(private http: Http) {
this.http.get('https://lib-http-ng.firebaseio.com/bookdetails.json')
.map((res: Response) => res.json())
.subscribe(result => this.apps = result['-KwK3LzXkTU2_XEHIHeR']);

  }
  searchBooksByName = '';
  // putData() {
  //   this.ServerService.storeBookdetails(this.apps)
  //     .subscribe(response => console.log(response),
  //     (err) => console.log(err))
  // }
}