<template>
  <PostCard v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
// import { postService } from '../services/PostService'
// import Notification from '../utils/Notification'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({ })
    watchEffect(async() => {
    })
    return {
      state,
      posts: computed(() => AppState.searchedPosts)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
