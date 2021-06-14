<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center mt-4">
    <div class="about text-center">
      <CreatePost v-if="account.id == activeAccount.id" />
      <h1 v-if="account.id == activeAccount.id">
        Welcome {{ activeAccount.name }}
      </h1>
      <img class="rounded" :src="activeAccount.picture" alt="" />
      <p>{{ activeAccount.email }}</p>
    </div>
    <EditProfile v-if="account.id == activeAccount.id" />
  </div>
  <!-- <p>{{ activePostPage.current }}</p> -->
  <PostCard v-for="post in posts" :key="post.id" :post="post" />
  <!-- <p class="text-center">
    <button class="btn btn-bg-primary" v-if="activePostPage.prev" @click="getActivePostPage(activePostPage.prev)">
      prev
    </button>
    Page {{ activePostPage.current }}
    <button class="btn btn-bg-primary" v-if="activePostPage.next" @click="getActivePostPage(activePostPage.next)">
      next
    </button>
  </p> -->
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
import { postService } from '../services/PostService'

export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({})
    onMounted(async() => {
      try {
        await profileService.viewProfile(route.params.id)
        await profileService.getPostsFromProfile(route.params.id)
        scroll(0, 0)
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      state,
      activePostPage: computed(() => AppState.activePostPage),
      posts: computed(() => AppState.activeAccountPosts),
      activeAccount: computed(() => AppState.activeAccount),
      account: computed(() => AppState.account),
      async getActivePostPage(pageUrl) {
        await postService.getActivePostPage(pageUrl)
        scroll(0, 0)
      }
    }
  }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
