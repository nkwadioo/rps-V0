import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './service/web-socket.service';
import { AppDataService } from './service/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'RPS';

  constructor(private webSocketService: WebSocketService, private appData: AppDataService) {
    // this.webSocketService.listen('gameInfo').toPromise()
    // .then( res => {
    //   // this.liveCount = res;
    //   appData.appInfo.next({liveCount: res});
    // }).catch( err => {
    //   console.log(err);
    // });
    webSocketService.listen('gameInfo').subscribe( (data) => {
      console.log(data);
      appData.appInfo.next(data);
    })
  }


  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
}
