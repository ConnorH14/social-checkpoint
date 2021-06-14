import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  // Login Vars
  user: {},
  account: {},
  // Active User Vars
  activeAccount: {},
  activeAccountPosts: [],
  activePostPage: {
    current: '',
    next: '',
    prev: ''
  },
  // Post Vars
  posts: [],
  postPage: {
    current: '',
    next: '',
    prev: ''
  },
  // Search
  searchedPosts: [],
  // Posters
  posters: []
})
