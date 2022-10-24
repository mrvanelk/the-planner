import { Injectable } from '@angular/core';
import { Employee } from '../domain/employee';
import { Shift } from '../domain/shift';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(array: Shift | Employee, key: string): void {
    let arrays = [];

    if (localStorage.getItem(key)) {
      arrays = JSON.parse(localStorage.getItem(key) ?? '');
      arrays = [array, ...arrays];
    } else {
      arrays = [array];
    }

    localStorage.setItem(key, JSON.stringify(arrays));
  }

  getItem(key: string): [] {
    let data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
    return [];
  }
}
