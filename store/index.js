/**
 * Created by galen on 2016/12/29.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import {state} from './store';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  plugins
})