import {User} from "../model/user";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../service/user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UserResolver implements Resolve<User> {

    constructor(private userService: UserService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.getUserById(route.params['id']);
    }

}