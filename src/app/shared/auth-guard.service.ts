import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';


// noinspection JSAnnotator
@Injectable()

export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):  Observable <boolean  | Promise <boolean > | boolean > {
        return this.auth.isAuthenticate().then(
            (logedin: boolean) => {
                if (logedin) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                }
            }
        );
    }


    // canActivate(): boolean {
    //     this.router.navigate(['/login']);
    //     return false;
    //     if (!this.auth.isAuthenticate()) {
    //         this.router.navigate(['/']);
    //         return false;
    //     }
    // }
}

