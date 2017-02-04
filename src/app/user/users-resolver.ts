import {User} from "../model/user";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../service/user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersResolver implements Resolve<Array<User>> {

    constructor(private userService: UserService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<User>> {
        return this.userService.users;
    }

}