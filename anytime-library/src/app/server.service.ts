import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http:Http) {
    }
    // storeBookdetails(books:any[]) {
    //    return this.http.post('https://lib-http-ng.firebaseio.com/bookdetails.json',books);
    // }
    // getBookDetails(): Observable<any>{
    //        return this.http.get('https://lib-http-ng.firebaseio.com/bookdetails.json')
    //      .map(res => res.json())
    // }
    userData = {};
    Userdetails(userInfo) {
        // console.log(userInfo); 
        this.userData = userInfo;
        // console.log(this.userData)
    }

    
}