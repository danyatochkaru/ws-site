import { createStore } from 'vuex'

export default createStore({
  state: {
    navMenu: [
      { title: 'Главная', link: '/'},
      { title: `Корзина`, link: '/tresh'}
    ],
    tresh: [1,3]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
