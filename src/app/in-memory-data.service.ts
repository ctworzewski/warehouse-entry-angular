import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { WarehouseEntry } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: WarehouseEntry[] = [
      { id: 1, name: 'Chipsy Lays', quantity: 10 },
      { id: 2, name: 'Coca-cola', quantity: 10 },
      { id: 3, name: 'Masło Extra', quantity: 10 },
      { id: 4, name: 'Parówki Sokoliki', quantity: 10 },
      { id: 5, name: 'Galaretka truskawkowa', quantity: 10 },
      { id: 6, name: 'Herbata Lipton', quantity: 10 },
      { id: 7, name: 'Woda Żywiec Zdrój', quantity: 10 },
      { id: 8, name: 'Lody Koral', quantity: 10 },
      { id: 9, name: 'Ciastka Czekoladowe', quantity: 10 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: WarehouseEntry[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
