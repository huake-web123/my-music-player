const state = {
  currrentSong: {
    id: '',
    name: '',
    author: '',
    cover: '',
    timer: 0,
    src: ''
  }
}

const getters = {
  currrentSong: state => state.currrentSong
}

const actions = {
  playThis ({commit}, newOne) {
    commit('playThis', newOne)
  }
}

const mutations = {
  playThis (state, newOne) {
    state.currrentSong = newOne
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
