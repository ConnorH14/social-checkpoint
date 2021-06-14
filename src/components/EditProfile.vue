<template>
  <button class="btn btn-success" @click="editProfileToggle">
    Edit Profile
  </button>
  <form id="edit-profile" class="d-none mt-4" @submit.prevent="editProfile">
    <div class="form-group">
      <label for="name" class="d-none">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Name" v-model="state.editProfile.name">
    </div>
    <div class="form-group">
      <label for="bio" class="d-none">bio</label>
      <input type="text" class="form-control" id="bio" placeholder="Bio" v-model="state.editProfile.bio">
    </div>
    <div class="form-group">
      <label for="pictureUrl" class="d-none">Picture URL</label>
      <input type="text" class="form-control" id="pictureUrl" placeholder="Picture Url" v-model="state.editProfile.picture">
    </div>
    <div class="form-group">
      <label for="covereUrl" class="d-none">Cover Image URL</label>
      <input type="text" class="form-control" id="coverUrl" placeholder="Cover Image Url" v-model="state.editProfile.coverImg">
    </div>
    <div class="form-group">
      <label for="github" class="d-none">github</label>
      <input type="text" class="form-control" id="github" placeholder="Github" v-model="state.editProfile.github">
    </div>
    <div class="form-group">
      <label for="linkedin" class="d-none">linkedin</label>
      <input type="text" class="form-control" id="linkedin" placeholder="LinkedIn" v-model="state.editProfile.linkedin">
    </div>
    <div class="form-group">
      <label for="resume" class="d-none">resume</label>
      <input type="text" class="form-control" id="resume" placeholder="Resume" v-model="state.editProfile.resume">
    </div>
    <div class="form-group">
      <label for="class" class="d-none">class</label>
      <input type="text" class="form-control" id="class" placeholder="Class" v-model="state.editProfile.class">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="graduated" v-model="state.editProfile.graduated">
      <label class="form-check-label" for="graduated">Graduated</label>
    </div>
    <button type="submit" class="btn btn-secondary">
      Save Changes
    </button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      editProfile: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      editProfileToggle() {
        document.getElementById('edit-profile').classList.toggle('d-none')
      },
      async editProfile() {
        try {
          await profileService.editProfile(state.editProfile)
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
