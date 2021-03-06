import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(keyName: string): any | null {
    if (storageAvailable('localStorage')) {
      const value = window.localStorage.getItem(keyName);
      if (value === null) {
        return value;
      }
      try {
        return JSON.parse(value);
      } catch (error) {
        return null;
      }
    }
  }

  public setItem(keyName: string, keyValue: any): void {
    if (storageAvailable('localStorage')) {
      window.localStorage.setItem(keyName, JSON.stringify(keyValue));
    }
  }
}

function storageAvailable(type: 'localStorage' | 'sessionStorage'): boolean | undefined {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}