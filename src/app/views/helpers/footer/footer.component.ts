import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/service/web-socket.service';
import { AppDataService } from 'src/app/service/app-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private webSocketService: WebSocketService, private appData: AppDataService) {

  }

  ngOnInit(): void {
    // this.webSocketService.listen('footerData').toPromise()
    // .then( res => {

    // }).catch( err => {

    // }).finally(() => {

    // });
  }

}
