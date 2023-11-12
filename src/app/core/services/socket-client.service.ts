import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketClientService {
  private socket: io.Socket<any, any>;

  constructor() {
    this.socket = io.connect(environment.urlSocket, {
      secure: true,
      reconnectionDelay: 500,
      reconnection: true,
      forceNew: true,
      extraHeaders: {
        authentication:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJ0eXBlVXNlciI6InVzZXIiLCJpYXQiOjE2OTk4MTI4NDAsImV4cCI6MTY5OTgxNjQ0MH0.hx6l-94eISw0KE8u_mhYE-hCoBZXwxB8ckG3W4yaffM',
      },
    });

    this.verifyConnections();
  }

  /**
   * @description: Escucha en mensaje que manda el soket Io
   */
  public listenin<T = any>(mesaage: string): Observable<T> {
    return new Observable((observer) => {
      this.socket.on(mesaage, (data: any) => {
        observer.next(data);
      });
    });
  }

  private verifyConnections(): void {
    this.socket.on('connect', () => {
      console.log('connect web socket');
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect web socket');
    });

    this.socket.io.on('reconnect', (attempt: any) => {
      console.log('reconnect', attempt);
    });
  }
}
