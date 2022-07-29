import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`hero.service: getHeroes() ${HEROES.length}`)
    return heroes
  }

  getHero(id:number):Observable<Hero>{
    const hero = HEROES.find(h=>h.id===id)!;
    this.messageService.add(`hero.service: fetch hero ${id}`);
    return of(hero)
  }
  constructor(private messageService:MessageService,http:HttpClient) { }
}
