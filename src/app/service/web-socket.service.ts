import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
// import { webSocket, WebSocketSubject} from 'rxjs/webSocket'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  readonly url: string = 'ws://localhost:9000';

  constructor() {
    this.socket = io(this.url);

  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
