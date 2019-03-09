import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const modules = {};
const files = require.context('./modules', false, /.js$/);
files.keys()
  .filter(file => files(file).default)
  .forEach((file) => {
    const name = file.replace(/(.\/|.js)/g, '');
    modules[name] = files(file).default;
  });

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState({
      key: 'db',
      paths: ['dbPath'],
    }),
  ],
  state: {
    dbPath: '',
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});
