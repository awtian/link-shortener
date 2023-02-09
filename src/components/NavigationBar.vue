<template>
  <div class="container">
    <img class="logo" src="@/assets/images/logo.svg" />
    <label @click="toggleMobileMenu" class="nav-icon" for="nav-menu1">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <transition name="fade">
    <div v-if="showMobileMenu" class="mobile-menu">
      <p><a>Features</a></p>
      <p><a>Pricing</a></p>
      <p><a>Resources</a></p>
      <hr />
      <p><a>Login</a></p>
      <button>Sign Up</button>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    showMobileMenu: false,
  }),
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.logo {
  padding: 10px;
}

.mobile-menu {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 83vw;
  background-color: hsl(257, 27%, 26%);
  color: white;
  padding: 20px 15px;
  border-radius: 10px;
  text-align: center;
  /* border: 3px solid #73ad21; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.nav-icon {
  padding: 10px;
  cursor: pointer;
}
.nav-icon span {
  display: block;
  margin: 5px;
  height: 3px;
  width: 25px;
  background: rgb(144, 143, 154);
}
</style>
