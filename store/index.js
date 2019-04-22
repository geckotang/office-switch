const fetch = require('node-fetch')

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
    const url = `${process.env.FRONT_API_URL}/hello`
    const res = await fetch(url, { method: 'GET' })
    const json = await res.json()
    const text = json.text
    commit('ADD_TEXT', text)
    return text
  }
}
