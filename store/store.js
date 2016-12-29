/**
 * Created by galen on 2016/12/29.
 */

import {STORAGE_KEY} from './mutation_types';

export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
};
