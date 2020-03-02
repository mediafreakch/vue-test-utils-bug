import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiMock = {
  Chart: {
    title: "I am a Chart"
  },
  Dashboard: {
    items: ["Chart"],
    title: "I am a Dashboard"
  }
};

export const store = new Vuex.Store({
  state: {
    viewInfos: {
      Chart: null,
      Dashboard: null
    }
  },
  mutations: {
    addViewInfo(state, { kind, data }) {
      state.viewInfos[kind] = data;
    }
  },
  getters: {
    getViewInfo: state => kind => state.viewInfos[kind]
  },
  actions: {
    async fetchViewInfo({ commit }, kind) {
      setTimeout(() => {
        commit(apiMock[kind]);
      }, 100);
    }
  }
});
