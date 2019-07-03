import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : any[] = [];

  constructor() { }
}
