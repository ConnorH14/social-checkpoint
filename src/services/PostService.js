import { logger } from '../utils/Logger'

class PostService {
  getPosts() {
    logger.log('get posts')
  }
}
export const postService = new PostService()
