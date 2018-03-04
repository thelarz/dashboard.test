import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HubService {

  private hubUrl = "ws://127.0.0.1:8181/";
  private ws;

  message = new Subject<any>();
  messageCast = this.message.asObservable();

  constructor() {
    this.connectLocalHub(this.hubUrl);
   }


  connectLocalHub(url) {

    console.log("connecting to hub");
      if (!this.ws) {
          this.ws = new WebSocket(url);
      }
      
      if (!this.ws.onopen) {
          this.ws.onopen = function() {
              console.log("$hub: Connection is open");
              //this.notifyOpenObservers();
          }
      }

      if (!this.ws.onmessage) {
          this.ws.onmessage = (evt) => {
            var data = JSON.parse(evt.data);
            this.message.next(data);      
          };
      }

      if (!this.ws.onclose) {
          this.ws.onclose = () => {
              setTimeout(() => {
                  console.log("$hub: Connection closed, retrying");
                  this.connectLocalHub(this.hubUrl);
              }, 1000);
          }
      }

      if (!this.ws.onerror) {
          this.ws.onerror = (target) => {
              console.log("$hub: Error connecting to websocket");
          }
      }

  };

}
