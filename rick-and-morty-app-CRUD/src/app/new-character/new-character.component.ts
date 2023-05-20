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

  // Add service and router
  constructor(private charactersService: CharactersListService, private router: Router) { }


  // Function that takes you to /ch
  goBack() {
    this.router.navigate(['/characters']);
  }


}
