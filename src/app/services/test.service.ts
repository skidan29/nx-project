import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public sunNumber(a:number,b:number):number{
    return a+b;
  }

}
