import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes=HEROES;

  selectedHero?: Hero;


  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
