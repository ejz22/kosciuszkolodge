import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
