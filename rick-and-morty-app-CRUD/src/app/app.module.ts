import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ModCharacterComponent } from './mod-character/mod-character.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    HomeComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    NewCharacterComponent,
    ModCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
