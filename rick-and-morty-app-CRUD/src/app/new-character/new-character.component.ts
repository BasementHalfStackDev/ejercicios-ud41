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

  // Create empty character object
  character: Character = {} as Character;

  // Add service and router
  constructor(private charactersService: CharactersListService, private router: Router) { }

  // Function to create character
  addChar() {
    // Checks all fields contain data and stops if not
    if (!this.character.gender || !this.character.image || !this.character.name || !this.character.origin ||
      !this.character.species || !this.character.status) {
      alert("Missing data on fields!");
      return;
    }

    // If all correct, adds character to DB
    this.charactersService.addCharacter(this.character).subscribe({
      next: response => {
        // If response
        if (response) {
          // Notify it's been successful
          alert("Character added successfully!")
          // Clear the form
          this.character = {} as Character;
        }
      },
      error: error => {
        console.log(error);
      }
    })

  }

  // Function that takes you to /characters
  goBack() {
    this.router.navigate(['/characters']);
  }


}
