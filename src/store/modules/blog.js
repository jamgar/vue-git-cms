import * as types from '../types'

const state = {
  isEditing: false,
  blog: {
    title: '',
    tags: '',
    publish_date: '',
    body: ''
  },
  blogs: [
    {"id": 1, "title": "Blog1", "tags": "tag1", "publish_date": '01-12-2018', "body": "Body of blog1"},
    {"id": 2, "title": "Blog2", "tags": "tag1", "publish_date": '01-13-2018', "body": "Body of blog2"},
    {"id": 3, "title": "Blog3", "tags": "tag1", "publish_date": '01-14-2018', "body": "Body of blog3"},
    {"id": 4, "title": "Blog4", "tags": "tag1", "publish_date": '01-15-2018', "body": "Body of blog4"},
    {"id": 5, "title": "Blog5", "tags": "tag1", "publish_date": '01-16-2018', "body": "Body of blog5"}
  ],
}

const getters = {
  [types.GET_BLOG](state) {
    return state.blog

  },
  [types.GET_BLOGS](state) {
    return state.blogs
  }
}

const mutations = {
  [types.ADD_BLOG]: (state, payload) => {
    payload["id"] = state.blogs.length + 1
    state.blogs.push(payload)
  },
  [types.EDIT_BLOG]: (state, payload) => {
    const idx = state.blogs.findIndex((blog) => blog.id === payload.id)
    state.blogs[idx] = Object.assign({}, payload)
  },
  [types.DELETE_BLOG]: (state, id) => {
    const idx = state.blogs.findIndex((blog) => blog.id === id)
    state.blogs.splice(idx, 1)
  },
  [types.RESET_BLOG]: (state) => {
    state.blog = Object.assign({}, state.blog, {
      title: '',
      tags: '',
      publish_date: '',
      body: ''
    })
  },
  [types.SET_BLOG]: (state, id) => {
    const setBlog = state.blogs.find((blog) => blog.id === id)
    state.blog = Object.assign({}, state.blog, setBlog)
  },
  [types.SET_EDITING]: (state, editing = false) => {
    state.isEditing = editing
  },
  [types.UPDATE_TITLE]: (state, title) => {
    state.blog = Object.assign({}, state.blog, title)
  },
  [types.UPDATE_TAGS]: (state, tags) => {
    state.blog = Object.assign({}, state.blog, tags)
  },
  [types.UPDATE_PUBLISH_DATE]: (state, publish_date) => {
    state.blog = Object.assign({}, state.blog, publish_date)
  },
  [types.UPDATE_BODY]: (state, body) => {
    state.blog = Object.assign({}, state.blog, body)
  }
}

const actions = {
  addBlog: ({commit}) => {
    // Send Post to API
    commit(types.ADD_BLOG, state.blog)
  },
  editBlog: ({commit}, payload) => {
    // Send Put to API
    commit(types.EDIT_BLOG, payload)
    commit(types.SET_EDITING)
  },
  deleteBlog: ({commit}, id) => {
    // Send Delete to API
    commit(types.DELETE_BLOG, id)
  },
  setBlog: ({commit}, id) => {
    commit(types.SET_BLOG, id)
  },
  resetBlog: ({commit}) => {
    commit(types.RESET_BLOG)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
