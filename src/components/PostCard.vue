<template>
  <div class="m-lg-4 pt-lg-3 pb-lg-2 pl-5 bg-light shadow text-dark py-4 rounded">
    <router-link :to="{name: 'AccountPage', params:{ id: post.creator.id}}" :key="post.creator.id">
      <span>
        <img :src="post.creator.picture"
             alt="profilePicture"
             width="50"
             height="50"
             class="profile-img"
        >
      </span>
      <span>
        <small class="pb-4 ml-3 account-name">{{ post.creator.name }}</small>
      </span>
    </router-link>
    <div class="p-3 mr-3">
      <img class="img-fluid" v-if="post.imgUrl" :src="post.imgUrl" alt="">
    </div>
    <small class="ml-5">{{ post.createdAt }}</small>
    <div class="text-container">
      <p>
        {{ post.body }}
      </p>
    </div>
    <div class="pt-2">
      <p>Likes: {{ post.likes.length }}</p>
      <button class="btn-secondary" v-if="account.id" @click="likePost">
        Like
      </button>
    </div>
    <div v-if="post.creator.id == account.id">
      <button class="btn btn-warning mr-2" @click="toggleEdit">
        Edit
      </button>
      <button class="btn btn-danger" @click="deletePost">
        Delete
      </button>
    </div>
    <div id="edit-post-form" class="d-none" v-if="post.creator.id == account.id">
      <form class="mt-2" @submit.prevent="editPost">
        <div class="form-group">
          <label for="postImg" class="d-none">Image Url</label>
          <input
            type="text"
            class="form-control"
            id="postImg"
            placeholder="Image Url"
            v-model="state.postEdit.imgUrl"
          >
        </div>
        <div class="form-group">
          <label for="postContent" class="d-none">Post Content</label>
          <input
            type="text"
            class="form-control"
            id="postContent"
            :placeholder="post.body"
            v-model="state.postEdit.body"
            required
          >
        </div>
        <button type="submit" class="btn btn-secondary">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      postEdit: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      deletePost() {
        postService.deletPost(props.post.id)
      },
      async editPost(event) {
        await postService.editPost(props.post.id, state.postEdit)
        event.target.reset()
        this.toggleEdit()
      },
      toggleEdit() {
        document.getElementById('edit-post-form').classList.toggle('d-none')
      },
      likePost() {
        postService.likePost(props.post.id)
      }
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

.account-link {
  cursor: pointer;
}

.account-name {
  color: #474444;
}

.profile-img {
  border-radius: 50%;
  border: 3px solid #474444;
}
</style>
