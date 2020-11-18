import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './../data/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = '/api/users';

  constructor(private http: Http) {}

  getUsers(): Promise<void | User[]> {
    return this.http
      .get(this.endpoint)
      .toPromise()
      .then((res) => {
        console.log('got response from endpoint', res.json());
        const users = res.json().users as User[];
        console.log('parsed to users', users);
        return users;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let message = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'server error';
    console.error(message);
  }
}
