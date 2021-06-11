<template>
  <div class="container-fluid">
    <div class="text-center text-wrap text-primary">
      <img class="my-5" :src="account.picture" alt="" />
      <h1>{{ account.name }}</h1>
      <p>{{ account.email }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  width: 50%;
  border-radius: 50%;
}

h1 {
  font-size: 1.5vw;
}

p {
  font-size: 1vw;
}

</style>
