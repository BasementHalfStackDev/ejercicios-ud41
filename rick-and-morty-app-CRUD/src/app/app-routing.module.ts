import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ModCharacterComponent } from './mod-character/mod-character.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/new', component: NewCharacterComponent},
  { path: 'characters/id/:id', component: CharacterDetailsComponent},
  { path: 'characters/id/:id/modify', component: ModCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
