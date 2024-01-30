import { achievementSvc } from '@achievements/services/achievement.service';
import { storageSvc } from '@shared/services/storage.service';

import { IProgression, IProgressionWithCount } from '@achievements/models/progression.model';

import { STORAGES_KEY } from '@achievements/constants/storageKey.constants';
import { getProgressionStorage, PROGRESSION_SHOWN } from '@achievements/constants/progressionStorageKeys.constants';

class ProgressionService {

  private storage: Object;
  private key: string;

  constructor() {
    this.key = STORAGES_KEY.progression;
    this.storage = storageSvc.get<Object>(STORAGES_KEY.progression) || getProgressionStorage();
  }

  /**
   * Return current progression
   * @returns {Object}
   */
  getProgressionStorage(): Object { return this.storage; }

  getProgressionShownKeys(): IProgression[] {
    return PROGRESSION_SHOWN.filter((progression: IProgression) => progression.show);
  }

  getProgressionShown(): IProgressionWithCount[] {
    const keys = this.getProgressionShownKeys();
    return keys.map((item: IProgression) => {
      const count = storageSvc.get<Object>(STORAGES_KEY.progression)[item.value];
      return {
        ...item,
        count: item.callback ? item.callback(count) : count
      };
    });
  }

  /**
   * Init service and local storage
   */
  init() {
    if (!storageSvc.get<Object>(STORAGES_KEY.progression)) {
      this.storage = getProgressionStorage();
      storageSvc.set<Object>(STORAGES_KEY.progression, this.storage);
    }

    if (!storageSvc.get<Object>(STORAGES_KEY.trophies)) {
      storageSvc.set<Object>(STORAGES_KEY.trophies, {});
    }

    if (!storageSvc.get<Object>(STORAGES_KEY.completed)) {
      storageSvc.set<Object>(STORAGES_KEY.completed, []);
    }
  }

  reset() {
    this.storage = null;

    storageSvc.remove(STORAGES_KEY.progression);
    storageSvc.remove(STORAGES_KEY.trophies);
    storageSvc.remove(STORAGES_KEY.completed);
  }

  /**
   * Update progression in storage with value and check if trophy is unlock
   * @param {IProgression} - progression
   * @param {number} - value
   */
  setValue(progression: IProgression, value: number) {
    if (!this.storage.hasOwnProperty(progression.value)) return;
    this.storage[progression.value] = value;
    storageSvc.set<Object>(this.key, this.storage);

    achievementSvc.check(progression);
  }

  /**
   * Increment value in storage and check if trophy is unlock
   * @param {IProgression} - progression
   * @param {number} - value
   */
  increment(progression: IProgression, value?: number) {
    if (!this.storage.hasOwnProperty(progression.value)) return;
    this.storage[progression.value] += value ? value : 1;
    storageSvc.set<Object>(this.key, this.storage);

    achievementSvc.check(progression);
  }

  /**
   * Decrement value in storage and check if trophy is unlock
   * @param {IProgression} - progression
   */
  decrement(progression: IProgression) {
    if (!this.storage.hasOwnProperty(progression.value)) return;
    this.storage[progression.value]--;
    storageSvc.set<Object>(this.key, this.storage);
  }

}

export const progressionSvc = new ProgressionService();
export default ProgressionService;
