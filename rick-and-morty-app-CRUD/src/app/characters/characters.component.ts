import { Component, OnInit } from '@angular/core';
import { CharactersListService } from '../service/characters-list.service';
import { Router } from '@angular/router';
import { Character } from '../models/character';
import { tap } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  // Create variables to store data
  characters: Character[] = [];

  // Add service and router
  constructor(private charactersService: CharactersListService, private router: Router) { }

  ngOnInit(): void {
    this.getAllChars();
  }

  // Function to get all characters in DB
  getAllChars() {
    this.charactersService.returnValues().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
      },
      error: (error: any) => {
        console.log("Something went wrong:", error);
      }
    });
  }

  // Function that takes you to character details
  readMore(id: number) {
    this.router.navigate(['/characters/id', id]);
  }

  // Function to navigate to the new character form
  newChar() {
    this.router.navigate(['/characters/new']);
  }

  // Function to delete a character
  deleteChar(id: number, name: string) {
    const message: string = "Are you sure you want to delete the character " + name + "?";
    const userChoice = window.confirm(message);

    // If user confirms
    if (userChoice) {
      // Delete character by ID
      this.charactersService.deleteCharacter(id).subscribe({
        next: response => {
          // Refresh characters
          this.getAllChars();
        },
        error: error => {
          console.log("Something went wrong:", error);
        }
      });
    } else {
      return;
    }
  }

}
