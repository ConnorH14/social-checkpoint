<template>
  <div class="col-8 mt-4 text-center mx-auto">
    <p class="new-post-button" @click="togglePostForm()">
      New Post
    </p>
    <form id="post-form" class="d-none" @submit.prevent="createPost">
      <div class="form-group">
        <label for="postImg" class="d-none">Image Url</label>
        <input type="text" class="form-control" id="postImg" placeholder="Image URL" v-model="state.newPost.imgUrl">
      </div>
      <div class="form-group">
        <label for="postContent" class="d-none">Post Content</label>
        <input
          type="text"
          class="form-control"
          id="postContent"
          placeholder="New post..."
          v-model="state.newPost.body"
          required
        >
      </div>
      <button type="submit" class="btn btn-secondary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      newPost: {
        creatorId: AppState.account._id
      }
    })
    return {
      state,
      togglePostForm() {
        document.getElementById('post-form').classList.toggle('d-none')
      },
      createPost(event) {
        postService.createPost(state.newPost)
        event.target.reset()
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
