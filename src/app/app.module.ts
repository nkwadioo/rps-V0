import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
import { PopUpsComponent } from './modals/pop-ups/pop-ups.component';
import { HeaderComponent } from './views/helpers/header/header.component';
import { FooterComponent } from './views/helpers/footer/footer.component';

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
    BrowserAnimationsModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
