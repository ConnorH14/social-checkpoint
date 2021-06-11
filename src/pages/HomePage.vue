<template>
  <div class="container-fluid">
    <div class="row">
      <Thread />
    </div>
  </div>
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
export default {
  name: 'Home',
  setup() {
    watchEffect(async() => {
      try {
        postService.getPosts()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
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
