import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
import { PopUpsComponent } from './modals/pop-ups/pop-ups.component';
import { HeaderComponent } from './views/helpers/header/header.component';
import { FooterComponent } from './views/helpers/footer/footer.component';
// import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PopUpsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
