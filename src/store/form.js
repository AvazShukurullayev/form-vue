const form = {
  state: {
    formArray: [],
  },
  getters: {
    getForm(state) {
      return state.formArray;
    },
  },
  mutations: {
    setForm(state, data) {
      state.formArray.push(data);
    },
  },
  actions: {
    actionForm({ commit }, payload) {
      commit("setForm", payload);
    },
  },
};

export default form;
