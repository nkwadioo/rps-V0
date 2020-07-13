import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../../../service/backend.service';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {

  passDontMatch = true;
  resForm = {
    username: '',
    newPassword: '',
    comfirmPassword: ''
  };

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  registor(form: NgForm) {
    debugger;
    console.log(form);
    this.backend.registorUser(form.value).toPromise()
    .then( res => {

    }).catch(err => {
      console.log(err)
    }).finally( () => {
      console.log('done');
    });
  }

  password() {
    this.passDontMatch = true;
    if (this.resForm.comfirmPassword !== '' || this.resForm.newPassword !== '' &&
        this.resForm.comfirmPassword == this.resForm.newPassword) {
          this.passDontMatch = false;
    }
  }

}
