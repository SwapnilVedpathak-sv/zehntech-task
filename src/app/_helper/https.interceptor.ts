import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': '8653d89daemsh35bfce165714a01p140654jsne42eced8f1cf',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    })

    return next.handle(request);
  }
}