import axios from 'axios'
import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
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
}
export const postService = new PostService()
