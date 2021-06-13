<template>
  <div class="col-12">
    <div class="my-3 mx-lg-5 py-5 p-4 bg-secondary text-light mt-5">
      <p>{{ postPage.current }}</p>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <p class="text-center">
        <button class="btn btn-bg-primary" v-if="postPage.prev" @click="getPostPage(postPage.prev)">
          prev
        </button>
        Page {{ postPage.current }}
        <button class="btn btn-bg-primary" v-if="postPage.next" @click="getPostPage(postPage.next)">
          next
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      posts: computed(() => AppState.posts),
      postPage: computed(() => AppState.postPage),
      async getPostPage(url) {
        await postService.getPostPage(url)
        scroll(0, 0)
      }
    }
  }
}
</script>

<style scoped>
</style>
