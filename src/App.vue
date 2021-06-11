<template>
  <header>
  </header>
  <main>
    <div class="container-fluid m-0 p-0">
      <div class="row">
        <div class="col-lg-3 m-0 bg-dark fill-bar">
          <Accountbar />
        </div>
        <div class="col-xl-9 m-0 p-0">
          <Navbar />
          <router-view />
        </div>
      </div>
    </div>
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.fill-bar {
  height: 100vh;
  border-right: 3px solid #1a1919;
}

@media only screen and (max-width: 1199px) {
  .fill-bar {
    display: none;
  }
}

</style>
