import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceShipService } from './space-ship.service';

@Injectable({
  providedIn: 'root',
})
export class DestructionGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const hasSpaceShips =
      this.spaceShipService.hangarShips.getValue().length > 0;
    if (hasSpaceShips) {
      return true;
    }

    alert('Nie ma statków w hangarze!');
    return this.router.parseUrl('/');
  }

  constructor(
    private spaceShipService: SpaceShipService,
    private router: Router
  ) {}
}
