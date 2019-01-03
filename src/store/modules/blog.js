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
    {"id": 3, "title": "Blog2", "tags": "tag1", "publish_date": '01-13-2018', "body": "Body of blog2"},
    {"id": 2, "title": "Blog3", "tags": "tag1", "publish_date": '01-14-2018', "body": "Body of blog3"},
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
    state.blogs = state.blogs.map(blog => {
      if (blog.id == payload.id) {
        return {
          ...blog,
          ...payload
        }
      }
    })
  },
  [types.SET_EDITTING]: (state) => {
    state.isEditing = !state.isEditing
  }
}

const actions = {
  addBlog: ({commit, dispatch}, payload) => {
    commit(types.ADD_BLOG, payload)
  },
  editBlog: ({commit, dispatch}, payload) => {
    commit(types.EDIT_BLOG, payload)
    commit(types.SET_EDITTING)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
