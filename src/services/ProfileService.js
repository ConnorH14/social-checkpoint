import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class ProfileService {
  async viewProfile(profileId) {
    // logger.log('view ', profileId)
    const res = await api.get('/api/profiles/' + profileId)
    AppState.activeAccount = res.data
    // logger.log(res.data)
  }

  async getPostsFromProfile(profileId) {
    const res = await api.get('/api/profiles/' + profileId + '/posts')
    AppState.activeAccountPosts = res.data.posts
    AppState.activePostPage.current = res.data.page
    AppState.activePostPage.next = res.data.older
    AppState.activePostPage.prev = res.data.newer
    // logger.log(res.data)
  }

  async editProfile(editProfile) {
    const res = await api.put('/account/', editProfile)
    logger.log(res.data)
  }
}
export const profileService = new ProfileService()
