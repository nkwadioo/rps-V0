import { Injectable } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { PopUpsComponent } from './pop-ups/pop-ups.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(/*private dialog: MatDialog*/) { }

  // openDialog(msg) {
  //   return this.dialog.open(PopUpsComponent, {
  //     width: '290px',
  //     panelClass: 'confirm-dialog-container',
  //     disableClose: true,
  //     position: { top: '0px' },
  //     data: {
  //       result: msg
  //     }
  //   });
  // }

  // closeDialog() {
  //   this.dialog.closeAll();
  // }
}
