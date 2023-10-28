import React from 'react';
import { makeAutoObservable } from 'mobx';

export class Store {
  // workGroupsPageStore: WorkGroupsStore;
  // task: ITrackerTask | null = null;

  storageHearts: number = 3;

  hearts = JSON.parse(localStorage.getItem('hearts') || '3');

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
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);