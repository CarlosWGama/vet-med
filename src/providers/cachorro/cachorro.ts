import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CachorroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CachorroProvider Provider');
  }

}
