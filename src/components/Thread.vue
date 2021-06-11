<template>
  <div class="col-12">
    <div class="my-3 mx-5 p-3 bg-secondary text-light">
      <small>Thread</small>
      <PostCard />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
</style>
