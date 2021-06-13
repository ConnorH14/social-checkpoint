import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  // Login Vars
  user: {},
  account: {},
  activeAccount: {},
  activeAccountPosts: [],
  // Post Vars
  posts: [],
  postPage: {
    current: '',
    next: '',
    prev: ''
  }
})
