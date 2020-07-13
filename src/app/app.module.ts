import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpsComponent } from './modals/pop-ups/pop-ups.component';
import { HeaderComponent } from './views/helpers/header/header.component';
import { FooterComponent } from './views/helpers/footer/footer.component';
import { GameComponent } from './views/game/game.component';
import { FormsComponent } from './views/forms/forms.component';
import { LoginComponent } from './views/forms/login/login.component';
import { RegistorComponent } from './views/forms/registor/registor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PopUpsComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    LoginComponent,
    RegistorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
