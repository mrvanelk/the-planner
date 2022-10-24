import { Injectable } from '@angular/core';
import { Employee } from '../domain/employee';
import { Shift } from '../domain/shift';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(item: Shift | Employee, key: string): void {
    let data = [];

    if (localStorage.getItem(key)) {
      data = JSON.parse(localStorage.getItem(key) ?? '');
      data = [item, ...data];
    } else {
      data = [item];
    }

    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): [] {
    let data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
    return [];
  }
}
