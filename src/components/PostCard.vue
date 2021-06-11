<template>
  <div class="m-lg-4 pt-lg-3 pb-lg-4 pl-5 bg-light shadow text-dark py-4 rounded">
    <img :src="post.creator.picture" alt="profilePicture" width="60" height="60">
    <small class="pb-4 ml-4">{{ post.creator.name }}</small>
    <div class="text-container">
      <p>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: { post: { type: Object, required: true } },
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
.text-container {
  border-radius: 10px;
  background-color: #eee8e8;
  box-shadow: 1px 1px 10px 0px #7a7878 inset;
  padding: 10px;
  margin-top: 20px;
  margin-right: 30px;
}

img {
  border-radius: 50%;
  border: 3px solid #474444;
}
</style>
