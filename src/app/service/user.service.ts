import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  public static USERS_ENDPOINT = environment.backendURL + "/users";

  constructor(private http: Http) { }

  get users(): Observable<Array<User>> {
    return this.http.get(UserService.USERS_ENDPOINT).map((res: Response) => res.json() as Array<User>);
  }

}
