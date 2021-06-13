import { AppState } from '../AppState'
import { api } from './AxiosService'
// import { logger } from '../utils/Logger'

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
  }
}
export const profileService = new ProfileService()
