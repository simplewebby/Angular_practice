import { Injectable } from '@angular/core';
import { User } from '../../../routes/users';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
newUser;
  constructor() { }
}
