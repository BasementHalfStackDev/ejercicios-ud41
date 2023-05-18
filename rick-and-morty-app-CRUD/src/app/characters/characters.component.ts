import { Component, OnInit } from '@angular/core';
import { CharactersListService } from '../service/characters-list.service';
import { Router } from '@angular/router';
import { Character } from '../models/character';

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
    this.charactersService.returnValues().subscribe((data: Character[]) => {
      this.characters = data;
      console.log(data);
    },
    error => {
      console.log("Something went wrong:", error);
    });
  }


  // Function that takes you to /characters/id
  readMore(id: number){
    this.router.navigate(['/characters', id]);
  }

}
