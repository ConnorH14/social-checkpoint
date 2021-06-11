<template>
  <div class="col-12">
    <div class="my-3 mx-lg-5 py-5 p-4 bg-secondary text-light mt-5">
      <PostCard v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped>
</style>
