import axios from 'axios'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts
    AppState.postPage.current = res.data.page
    AppState.postPage.next = res.data.older
    AppState.postPage.prev = res.data.newer
    // logger.log(res.data)
  }

  async getPostPage(url) {
    const res = await axios.get(url)
    AppState.posts = res.data.posts
    AppState.postPage.current = res.data.page
    AppState.postPage.next = res.data.older
    AppState.postPage.prev = res.data.newer
  }

  async getActivePostPage(url) {
    const res = await axios.get(url)
    AppState.activeAccountPosts = res.data.posts
    AppState.activePostPage.current = res.data.page
    AppState.activePostPage.next = res.data.older
    AppState.activePostPage.prev = res.data.newer
  }

  async getPostByQuery(query) {
    const res = await api.get('api/posts?query=' + query)
    AppState.searchedPosts = res.data.posts
    logger.log(query, res.data)
  }

  async createPost(post) {
    logger.log(post)
    const res = await api.post('api/posts', post)
    this.getPosts()
    logger.log(res.data)
  }

  async editPost(postId, postEdit) {
    const res = await api.put('api/posts/' + postId, postEdit)
    this.getPosts()
    logger.log(res.data)
  }

  async likePost(postId) {
    await api.post('api/posts/' + postId + '/like')
  }

  async deletPost(postId) {
    const res = await api.delete('api/posts/' + postId)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
    logger.log(res.data)
  }

  async getPosters() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.posters = res.data
  }
}
export const postService = new PostService()
