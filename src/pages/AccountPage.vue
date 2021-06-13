<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center mt-4">
    <div class="about text-center">
      <h1 v-if="account.id == activeAccount.id">
        Welcome {{ activeAccount.name }}
      </h1>
      <img class="rounded" :src="activeAccount.picture" alt="" />
      <p>{{ activeAccount.email }}</p>
    </div>
  </div>
  <PostCard v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'

export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({})
    onMounted(async() => {
      try {
        await profileService.viewProfile(route.params.id)
        await profileService.getPostsFromProfile(route.params.id)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      state,
      posts: computed(() => AppState.activeAccountPosts),
      activeAccount: computed(() => AppState.activeAccount),
      account: computed(() => AppState.account)
    }
  }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
