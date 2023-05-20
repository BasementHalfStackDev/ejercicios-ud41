import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersListService } from '../service/characters-list.service';
import { Router } from '@angular/router';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  // Attribute to store id and character
  id: number = 0;
  character: Character = {} as Character;

  // Constructor with ActivatedRoute, Service, and Router
  constructor(private route: ActivatedRoute, private characterService: CharactersListService, private router: Router) { }

  ngOnInit(): void {
    // Get the id from the route parameters
    this.route.params.subscribe(params => {
      // Converts to int the id parameter
      this.id = +params['id'];

      // If id is not null
      if (this.id) {
        // Get character from service with passed ID
        this.characterService.getCharacter(this.id).subscribe((data: Character) => {
          this.character = data;
        })
      }

    });
  }

  // Function for back button to return to /characters
  goBack() {
    this.router.navigate(['/characters']);
  }

  modChar(id: number) {
    this.router.navigate(['/characters/id', id, 'modify']);
  }

}
