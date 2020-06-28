import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFull = 'grow';
  constructor() { }

  ngOnInit(): void {
  }

  fullScreen() {
    try {
      // const el = document.querySelector(`body`);
      // const scrollToTop = window.setInterval(() => {
      //   const pos = window.pageYOffset;
      //   if (pos > 0) {
      //     window.scrollTo(0, pos - 50); // how far to scroll on each step
      //   } else {
      //     window.clearInterval(scrollToTop);
      //   }
      // }, 16);
      // setTimeout(function(){
      //     // This hides the address bar:
      //     window.scrollTo(0, 1);
      // }, 0);

      // function toggleFullScreen() {
        let doc: any = window.document;
        let docEl: any = doc.documentElement;

        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          this.isFull = 'shrink';
          requestFullScreen.call(docEl);
        }
        else {
          this.isFull = 'grow';
          cancelFullScreen.call(doc);
        }
      // }
    } catch {}
  }

}
