import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../models/character';
import { CharactersListService } from '../service/characters-list.service';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent {

  character: Character = {} as Character;

  // Add service and router
  constructor(private charactersService: CharactersListService, private router: Router) { }

  // Function to create character
  addChar() {
    console.log(this.character);
    console.log("works")
    if (!this.character.gender || !this.character.image || !this.character.name || !this.character.origin ||
      !this.character.species || !this.character.status) {
        alert("Missing data on fields!");
        return;
      }

  }

  newChar() {


  }

  // Function that takes you to /ch
  goBack() {
    this.router.navigate(['/characters']);
  }


}
