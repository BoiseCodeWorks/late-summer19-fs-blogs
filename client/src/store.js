import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const blogApi = axios.create({
  baseURL: '//localhost:3000/api/blogs'
})
export default new Vuex.Store({
  state: {
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    setBlogs(state, values) {
      state.blogs = values
    },
    setActiveBlog(state, data) {
      state.activeBlog = data
    }
  },
  actions: {
    //#region -- Blogs --
    async getBlogs({ commit, dispatch }) {
      try {
        let res = await blogApi.get('')
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addBlog({ commit, dispatch }, payload) {
      try {
        await blogApi.post('', payload)
        dispatch("getBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    async delortBlog({ commit, dispatch }, payload) {
      try {
        await blogApi.delete('' + payload)
        dispatch("getBlogs")
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion
    //#region -- Active Blog --
    async getOneBlog({ commit, dispatch }, payload) {
      try {
        let res = await blogApi.get('' + payload)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    }
    //#endregion
  }
})
