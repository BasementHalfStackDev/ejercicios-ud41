import { Component } from '@angular/core';
import { Character } from '../models/character';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CharactersListService } from '../service/characters-list.service';

@Component({
  selector: 'app-mod-character',
  templateUrl: './mod-character.component.html',
  styleUrls: ['./mod-character.component.css']
})
export class ModCharacterComponent {

  // Attribute to store id and character
  id: number = 0;
  character: Character = {} as Character;

  constructor(private route: ActivatedRoute, private characterService: CharactersListService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.characterService.getCharacter(this.id).subscribe((data: Character) => {
        this.character = data;
      })
    });
  }

  goBack() {
    this.router.navigate(['/characters/id/' + this.id]);
  }

  modChar() {
    this.characterService.modCharacter(this.id, this.character).subscribe({
      next: response => {
        if (response) {
          alert("Character updated successfully!");
          this.goBack();
        }
      },
      error: error => {
        console.log("Something went wrong", error);
      }
    });
  }


}
