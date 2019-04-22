import axios from 'axios'

export const state = () => ({
  text: []
})

export const mutations = {
  ADD_TEXT(state, text) {
    state.text = text
  }
}

export const actions = {
  async LOAD_TEXT({ commit }) {
    const result = await axios.get('/hello', {
      baseURL: process.env.FRONT_API_URL
    })
    commit('ADD_TEXT', result.data.text)
    return result.data.text
  }
}
