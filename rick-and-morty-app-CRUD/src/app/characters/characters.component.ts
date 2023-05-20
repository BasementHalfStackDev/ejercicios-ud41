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

  getAllChars() {
    this.charactersService.returnValues().subscribe({
      next: (data: Character[]) => {
        this.characters = data;
        console.log(data);
      },
      error: (error: any) => {
        console.log("Something went wrong:", error);
      }
    });
  }

  // Function that takes you to /characters/id
  readMore(id: number){
    this.router.navigate(['/characters', id]);
  }

  deleteChar(id: number, name: string) {
    const message: string = "Are you sure you want to delete the character " + name + "?";
    const userChoice = window.confirm(message);

    if (userChoice) {
      this.charactersService.deleteCharacter(id).subscribe({
        next: response => {
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
