import { Injectable }     from '@angular/core';
import { CanLoad }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  checkLogin(url: string): boolean {
    return false;
  }

  canLoad(route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }
}