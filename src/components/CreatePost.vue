<template>
  <div class="col-8 mt-4 text-center mx-auto">
    <p class="new-post-button" @click="togglePostForm()">
      New Post
    </p>
    <form id="post-form" class="d-none">
      <div class="form-group">
        <label for="postImg" class="d-none">Image Url</label>
        <input type="text" class="form-control" id="postImg" placeholder="Image URL" height="50">
      </div>
      <div class="form-group">
        <label for="postContent" class="d-none">Post Content</label>
        <input type="text" class="form-control" id="postContent" placeholder="New post..." required>
      </div>
      <button type="submit" class="btn btn-secondary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      togglePostForm() {
        document.getElementById('post-form').classList.toggle('d-none')
      }
    }
  }
}
</script>

<style scoped>
.new-post-button {
  cursor: pointer;
  user-select: none;
}
</style>
