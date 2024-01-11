import { createStore } from 'vuex'


export default createStore({
  state: {
    isLoading: false,
    success: false,
    error: '',
    errors: {}
  },
  getters: {
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    setSuccess(state, success) {
      state.success = success
    },
    setError(state, error) {
      state.error = error
    },
    setErrors(state, errors) {
      state.errors = errors
  },
  },
  actions: {
    validateForm({ commit }, formData) {
      let errors = {}
      if (!formData.name.trim()) {
          errors.name = 'Укажите имя'
      }
      if (!formData.number.trim()) {
          errors.number = 'Требуется номер'
      }
      else if(!formData.number.match(/^[\d\s+-]+$/)){
          errors.number = 'Неверный формат номера телефона'
      }
      if (!formData.email.trim()) {
          errors.email = 'Электронная почта обязательна'
      }
      else if(!formData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          errors.email = 'Неверный формат электронной почты'
      }
      if (!formData.comment.trim()) {
          errors.comment = 'Требуется комментарий'
      }
      commit('setErrors', errors)
  },
},
  modules: {
  }
})