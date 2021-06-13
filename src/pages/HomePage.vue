<template>
  <div class="container-fluid">
    <div class="row">
      <CreatePost v-if="account.id" />
      <Thread />
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({ })
    watchEffect(async() => {
      try {
        await postService.getPosts()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
