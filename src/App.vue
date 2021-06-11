<template>
  <header>
  </header>
  <main>
    <div class="container-fluid m-0 p-0">
      <Navbar class="navbar-custom shadow-lg" />
      <div class="row mt-3">
        <div class="col-xl-3 m-0 mt-5 bg-dark fill-bar">
          <Accountbar />
        </div>
        <div class="col-xl-3 m-0 p-0"></div>
        <div class="col-xl-9 m-0 p-0 mt-5">
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
  position: fixed;
  height: 100vh;
}

.navbar-custom {
  z-index: 10;
}

@media only screen and (max-width: 1199px) {
  .fill-bar {
    display: none;
  }
}

</style>
