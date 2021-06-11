import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { sandboxApi } from './AxiosService'

class PostService {
  async getPosts() {
    const res = await sandboxApi.get('/posts')
    logger.log(res.data.posts)
    AppState.posts = res.data.posts
  }
}
export const postService = new PostService()
