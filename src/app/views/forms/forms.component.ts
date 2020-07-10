import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/service/web-socket.service';
import { AppDataService } from 'src/app/service/app-data.service';

@Component({
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  tabInput = 'login';
  liveCount: any = 0;
  constructor(private webSocketService: WebSocketService, private appData: AppDataService) {
    webSocketService.listen('gameInfo').subscribe( (data) => {
      console.log(data);
      appData.appInfo.next(data);
    });
    appData.appInfo.subscribe((value) => {
      this.liveCount = value;
    });
  }



  ngOnInit(): void {
  }

  toggleTab(val) {
    this.tabInput = val;
  }

}
