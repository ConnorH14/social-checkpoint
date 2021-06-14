<template>
  <div class="mt-5">
    <div v-for="poster in posters" :key="poster" :poster="poster">
      <img class="img-fluid m-3" :src="poster.tall" alt="poster">
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      posters: computed(() => AppState.posters)
    }
  }
}
</script>

<style scoped>
</style>
