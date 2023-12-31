import React from 'react';
import { makeAutoObservable } from 'mobx';

export class Store {
  hearts = JSON.parse(localStorage.getItem('hearts') || '3');
  inventory = Array.isArray(JSON.parse(localStorage.getItem('inventory'))) ? JSON.parse(localStorage.getItem('inventory')) : [];
  state = Array.isArray(JSON.parse(localStorage.getItem('state'))) ? JSON.parse(localStorage.getItem('state')) : [];

  // hearts = 3;
  constructor() {
    makeAutoObservable(this);
  }

  startGame() {
    localStorage.setItem(`hearts`, JSON.stringify(3));
    window.location.reload();
  }

  deleteHearts() {
    const jsonHearts = localStorage.getItem(`hearts`);
    const hearts = jsonHearts ? JSON.parse(jsonHearts) : null;
    if (hearts > 0) {
      localStorage.setItem(`hearts`, JSON.stringify(hearts - 1));
      this.hearts = this.hearts - 1;
    }
    if (hearts <= 0) {
      alert('Game over!');
    }
  }

  addHearts() {
    const jsonHearts = localStorage.getItem(`hearts`);
    const hearts = jsonHearts ? JSON.parse(jsonHearts) : null;
    if (hearts < 3) {
      localStorage.setItem(`hearts`, JSON.stringify(hearts + 1));
      this.hearts = this.hearts + 1;
    }
    if (hearts >= 3) {
      alert('максимум сердец');
    }
  }

  addInventory(value: string) {
    const jsonInventory = localStorage.getItem(`inventory`);
    const inventory: string[] = jsonInventory && jsonInventory.length > 1 ? JSON.parse(jsonInventory) : [];
    const dublicate = inventory.find(item => item === value);
    if (dublicate) {
      alert('ты уже это взял');
      return;
    }
    const body = Array.isArray(inventory) ? [...inventory, value] : [value];
    localStorage.setItem(`inventory`, JSON.stringify(body));
  }

  deleteInventory(value: string) {
    const jsonInventory = localStorage.getItem(`inventory`);
    const inventory: string[] = jsonInventory ? JSON.parse(jsonInventory) : [];
    const findItem = inventory.find(item => item === value);
    if (findItem) {
      const filteredInventory = inventory.filter(item => item !== value);
      localStorage.setItem(`inventory`, JSON.stringify(filteredInventory));
      return;
    }
    alert('такого нихуя нет');
  }

  getInventory() {
    const jsonInventory = localStorage.getItem(`inventory`);
    const inventory: string[] = jsonInventory ? JSON.parse(jsonInventory) : [];
    return inventory;
  }

  getState() {
    const jsonState = localStorage.getItem(`state`);
    const state: string[] = jsonState ? JSON.parse(jsonState) : [];
    return state;
  }
  addState(value: string) {
    const jsonState = localStorage.getItem(`state`);
    const state: string[] = jsonState && jsonState.length > 1 ? JSON.parse(jsonState) : [];
    const dublicate = state.find(item => item === value);
    if (dublicate) {
      alert('вы уже это сделали');
      return;
    }
    const body = Array.isArray(state) ? [...state, value] : [value];
    localStorage.setItem(`state`, JSON.stringify(body));
  }
  deleteState(value: string) {
    const jsonState = localStorage.getItem(`state`);
    const state: string[] = jsonState ? JSON.parse(jsonState) : [];
    const findItem = state.find(item => item === value);
    if (findItem) {
      const filteredInventory = state.filter(item => item !== value);
      localStorage.setItem(`state`, JSON.stringify(filteredInventory));
      return;
    }
    alert('такого нихуя нет');
  }
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);